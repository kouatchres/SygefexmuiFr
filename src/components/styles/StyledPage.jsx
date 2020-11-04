import styled from "styled-components";

const TableStyledPage = styled.div`
  padding: 0 1rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: row;
  text-align: center;
  width: 100vw;
  min-width: 30rem;

  background-color: ${(props) => props.theme.pureWhite};
  h4 {
    margin: 0 auto;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
    text-align: center;
    font-size: 1.6rem;
    font-weight: normal;
    box-shadow: ${(props) => props.theme.formBS};
    background: ${(props) => props.theme.pureWhite};
    width: 100%;
    border-radius: 0.5rem;
    color: black;
  }
  .Form {
    justify-items: center;
    align-items: center;
  }
  form {
    justify-items: center;
    align-items: center;
  }
`;

const StyledPage = styled.div`
  padding: 0 1rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: row;
  text-align: center;
  width: 70vw;
  min-width: 30rem;

  background-color: ${(props) => props.theme.pureWhite};
  h4 {
    margin: 0 auto;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
    text-align: center;
    font-size: 1.6rem;
    font-weight: normal;
    box-shadow: ${(props) => props.theme.formBS};
    background: ${(props) => props.theme.pureWhite};
    width: 100%;
    border-radius: 0.5rem;
    color: black;
  }
  .Form {
    justify-items: center;
    align-items: center;
  }
  form {
    justify-items: center;
    align-items: center;
  }
`;

const MiniStyledPage = styled.div`
  display: grid;
  padding: 0 1rem;
  margin: 0 auto;
  grid-template-columns: 1fr;
  grid-auto-flow: row;

  text-align: center;
  width: 50vw;
  min-width: 30rem;
  background-color: ${(props) => props.theme.pureWhite};

  h4 {
    margin: 0 auto;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
    text-align: center;
    font-size: 1.6rem;
    font-weight: normal;
    box-shadow: ${(props) => props.theme.formBS};
    background: ${(props) => props.theme.pureWhite};
    width: 100%;
    border-radius: 0.5rem;
    color: black;
  }
`;

const MinimStyledPage = styled.div`
  display: grid;
  margin: 0 auto;

  grid-template-columns: 1fr;
  grid-auto-flow: row;
  text-align: center;
  width: 30vw;
  min-width: 25rem;
  z-index: -10;
  background-color: ${(props) => props.theme.pureWhite};
  h4 {
    margin: 0 auto;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
    text-align: center;
    font-size: 1.6rem;
    font-weight: normal;
    box-shadow: ${(props) => props.theme.formBS};
    background: ${(props) => props.theme.pureWhite};
    width: 100%;
    border-radius: 0.5rem;
    color: black;
  }
  .Form {
    justify-items: center;
    align-items: center;
  }
  form {
    justify-items: center;
    align-items: center;
  }
`;

const BigStyledPage = styled.div`
  display: grid;
  padding: 0 1rem;
  margin: 0 auto;

  grid-template-columns: 1fr;
  grid-auto-flow: row;
  text-align: center;
  width: 60vw;
  min-width: 30rem;

  background-color: ${(props) => props.theme.pureWhite};
  h4 {
    margin: 0 auto;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
    text-align: center;
    font-size: 1.6rem;
    font-weight: normal;
    box-shadow: ${(props) => props.theme.formBS};
    background: ${(props) => props.theme.pureWhite};
    width: 100%;
    border-radius: 0.5rem;
    color: black;
  }
  .Form {
    justify-items: center;
    align-items: center;
  }
  fieldset {
    justify-items: center;
    align-items: center;
  }
`;

const BiggestStyledPage = styled.div`
  display: grid;
  padding: 0 1rem;
  margin: 0 auto;

  grid-template-columns: 1fr;
  text-align: center;
  width: 90vw;
  min-width: 30rem;
/* background: ${(props) => props.theme.specialBlue}; */
  background-color: ${(props) => props.theme.pureWhite};
  h4 {
    margin: 0 auto;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
    text-align: center;
    font-size: 1.6rem;
    font-weight: normal;
    box-shadow: ${(props) => props.theme.formBS};
    background: ${(props) => props.theme.pureWhite};
    width: 100%;
    border-radius: 0.5rem;
    color: black;
  }
  .Form {
    justify-items: center;
    align-items: center;
  }
  fieldset {
    justify-items: center;
    align-items: center;
  }
`;

const MediumStyledPage = styled.div`
  display: grid;
  padding: 0 1rem;
  margin: 0 auto;

  grid-template-columns: 1fr;
  text-align: center;
  width: 35vw;
  min-width: 30rem;
/* background: ${(props) => props.theme.specialBlue}; */
  background-color: ${(props) => props.theme.pureWhite};
  h4 {
    margin: 0 auto;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
    text-align: center;
    font-size: 1.6rem;
    font-weight: normal;
    box-shadow: ${(props) => props.theme.formBS};
    background: ${(props) => props.theme.pureWhite};
    width: 100%;
    border-radius: 0.5rem;
    color: black;
  }
  .Form {
    justify-items: center;
    align-items: center;
  }
  fieldset {
    justify-items: center;
    align-items: center;
  }
`;

export {
  MediumStyledPage,
  TableStyledPage,
  MinimStyledPage,
  MiniStyledPage,
  StyledPage,
  BigStyledPage,
  BiggestStyledPage,
};
