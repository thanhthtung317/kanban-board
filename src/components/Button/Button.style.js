import styled from "styled-components";
import Button from "./Button";

const StyledButton = styled(Button)`
    color: yellow;
    background-color: ${props=>props.background};
    outline: none;
    border: none;
    cursor: pointer;
    &:hover{
        color: red;
    }
`
export default StyledButton