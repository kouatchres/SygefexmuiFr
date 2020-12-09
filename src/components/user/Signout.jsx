import React from "react";
import { Mutation } from "react-apollo";
import Button from "@material-ui/core/Button";
import { currentUserQuery } from "../queries&Mutations&Functions/Queries";
import { signoutMutation } from "../queries&Mutations&Functions/Mutations";

const Signout = (props) => (
  <Mutation
    mutation={signoutMutation}
    refetchQueries={[{ query: currentUserQuery }]}
  >
    {(signout) => (
      <Button
        size="medium"
        variant="outlined"
        style={{
          color: "#4a8ba8",
          paddingLeft: "0.3rem",
          paddingRight: "0.3rem",
          textTransform: "none",
          backgroundColor: "#fff",
        }}
        onClick={signout}
      >
        Déconnecter
      </Button>
    )}
  </Mutation>
);

export default Signout;
