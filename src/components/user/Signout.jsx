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
          backgroundColor: "#829079",
           color: "#ede6b9", 
          // paddingLeft: "0.8rem",
          // paddingRight: "0.8rem",
          textTransform: "none",
        }}
        onClick={signout}
      >
        Déconnecter
      </Button>
    )}
  </Mutation>
);

export default Signout;
