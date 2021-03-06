# -*- coding: utf-8 -*- #
# Copyright 2018 Google LLC. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""Contains a class to rate commands based on relevance."""

from __future__ import absolute_import
from __future__ import division
from __future__ import unicode_literals

from googlecloudsdk.command_lib.help_search import lookup


class CommandRater(object):
  """A class to rate the results of searching a command."""

  # The below multipliers reflect heuristics for how "important" a term is
  # in a command based on where it's found.
  _COMMAND_NAME_MULTIPLIER = 1.0  # command name
  _ARG_NAME_MULTIPLIER = 0.5  # arg name (positional or flag)
  _PATH_MULTIPLIER = 0.5  # the command path
  _DEFAULT_MULTIPLIER = 0.25  # anything not controlled by other multipliers.

  # This multiplier controls how much a command is penalized for not containing
  # a search term.
  _NOT_FOUND_MULTIPLIER = 0.1

  # The below multipliers penalize commands that are duplicates of others.
  _DUPLICATE_MULTIPLIER = 0.1

  def __init__(self, results, command, found_commands):
    """Create a CommandRater.

    Args:
      results: googlecloudsdk.command_lib.search_help.search_util
        .CommandSearchResult, class that holds results.
      command: dict, a json representation of a command.
      found_commands: [dict], a list of all commands that were found.
    """
    self._command = command
    self._terms = results.AllTerms()
    self._results = results
    self._found_commands_map = {}
    for c in found_commands:
      path = _GetPathWithoutPrefix(c)
      self._found_commands_map.setdefault(path, []).append(c)

  def Rate(self):
    """Produce a simple relevance rating for a set of command search results.

    Returns a float in the range (0, 1]. For each term that's found, the rating
    is multiplied by a number reflecting how "important" its location is, with
    command name being the most and flag or positional names being the second
    most important, as well as by how many of the search terms were found.

    Commands are also penalized if duplicate results in a higher release track
    were found.

    Returns:
      rating: float, the rating of the results.
    """
    rating = 1.0
    rating *= self._RateForLocation()
    rating *= self._RateForTermsFound()
    rating *= self._RateForDuplicates()
    return rating

  def _RateForLocation(self):
    """Get a rating based on locations of results."""
    rating = 1.0
    locations = self._results.FoundTermsMap().values()
    for location in locations:
      if location == lookup.NAME:
        rating *= self._COMMAND_NAME_MULTIPLIER
      elif location == lookup.PATH:
        rating *= self._PATH_MULTIPLIER
      elif (location.split(lookup.DOT)[0] in [lookup.FLAGS, lookup.POSITIONALS]
            and location.split(lookup.DOT)[-1] == lookup.NAME):
        rating *= self._ARG_NAME_MULTIPLIER
      else:
        rating *= self._DEFAULT_MULTIPLIER
    return rating

  def _RateForTermsFound(self):
    """Get a rating based on how many of the searched terms were found."""
    rating = 1.0
    results = self._results.FoundTermsMap()
    for term in self._terms:
      if term not in results:
        rating *= self._NOT_FOUND_MULTIPLIER
    return rating

  def _RateForDuplicates(self):
    """Get a rating based on whether better results were found.

    For any command, if a command with the same name but a higher release track
    was found *and* the same terms were found in the same place, the rating
    is decreased.

    Returns:
      rating: float, a rating representing the penalty if the same results
        were found with a higher release track.
    """
    rating = 1.0
    tracks = [lookup.GA, lookup.BETA, lookup.ALPHA]
    command_path = _GetPathWithoutPrefix(self._command)
    for matching_command in self._found_commands_map.get(command_path, []):
      if matching_command != self._command:
        matching_release = matching_command[lookup.RELEASE]
        release = self._command[lookup.RELEASE]
        # Use the json representation of the results since that's all
        # that's available in matching_command.
        matching_results = matching_command[lookup.RESULTS]
        results = self._command[lookup.RESULTS]
        if (tracks.index(matching_release) < tracks.index(release)
            and matching_results == results):
          rating *= self._DUPLICATE_MULTIPLIER
    return rating


def _GetPathWithoutPrefix(command):
  """Helper to get the path of a command without a track prefix.

  Args:
    command: dict, json representation of a command.

  Returns:
    a ' '-separated string representation of a command path without any
      track prefixes.
  """
  return ' '.join(
      [segment for segment in command[lookup.PATH]
       if segment not in [lookup.ALPHA_PATH, lookup.BETA_PATH]])


class CumulativeRater(object):
  """Rates all found commands for relevance."""

  def __init__(self):
    """Creates a cumulative rater.
    """
    self._found_commands_and_results = []

  def AddFoundCommand(self, command, result):
    """Add a command that is a result.

    Args:
      command: dict, a json representation of a command. MUST already be updated
        with the search results.
      result: search_util.CommandSearchResults, the results object that goes
        with this command.
    """
    self._found_commands_and_results.append((command, result))

  def RateAll(self):
    """Adds rating to every command found."""
    all_commands = [command for (command, _)
                    in self._found_commands_and_results]
    for command, results in self._found_commands_and_results:
      rating = CommandRater(results, command, all_commands).Rate()
      command[lookup.RELEVANCE] = rating

