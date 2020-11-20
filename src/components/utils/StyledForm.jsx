import { makeStyles } from "@material-ui/core/styles";

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const useStyles = makeStyles({
  styledForm: {
    margin: "0.3rem",
    padding: "0.6rem",
    fontSize: "1.7rem",
    borderRadius: "0.9rem",
    border: "0.001rem solid black",
    borderTop: "rem solid black",
    borderBottom: "1rem solid black",
    boxShadow: "${(props) => props.theme.formBS}",

    minWidth: "20rem",
  },

  //   &[disabled]{
  //     opacity: "0.3",
  //   }
  //  &:before{
  //     height: "0.3rem",
  //     content: """",
  //     display: "block",
  //     backgroundImage: linearGradient(
  //       toRight,
  //      "#0780b7 0%",
  //       "#e2b04a 20%",
  //       "#0780b7 100%"
  //     )
  //     /* background-image: linear-gradient(to right, #ff3019 0%, #e2b04a 50%, #ff3019 100"%)" */
  //   },
  //   &[ariaBusy="true"]::before {
  //     backgroundSize: "50% auto",
  //     animation: "${loading} 0.5s linear infinite",
  //   }
});
