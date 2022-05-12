import NewCard from "./NewCard";
import styled from "styled-components";

export const StyledNewCard = styled(NewCard)`
  margin-top: 0.5em;
  border: 5px solid #f3f7f0;
  background-color: #a93f55;
  padding: 0.3em;
  & h4 {
    text-shadow: 1px 2px #19323c;
  }
  .field{
      display: flex;
      flex-direction: column;
        textarea{
          max-width: 100%;
      }
  }
  button {
      color: red;
        margin-top: .5em;
      padding: .1em;
  }
`;
