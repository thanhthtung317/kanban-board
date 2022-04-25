import styled from 'styled-components'
import Home from './Home'

const StyledHome = styled(Home)`
  width: 100vw;
  min-height: 100vh;
  background-color: #a9ddd6;

  h1{
    text-transform: capitalize;
    text-align: center;
    padding: .5em 0;
  }

  & .container {
    display: flex;
    justify-content: space-between;
  }
`;

export default StyledHome;