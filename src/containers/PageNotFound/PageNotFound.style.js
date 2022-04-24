import PageNotFound from "./PageNotFound";
import styled from 'styled-components'

const StyledPNF = styled(PageNotFound)`
    width: 100vw;
    height: 100vh;
    background-color: black;
    color: white;
    display: grid;
    place-content: center;
    text-transform: capitalize;
    font-size: 2rem;
`

export default StyledPNF