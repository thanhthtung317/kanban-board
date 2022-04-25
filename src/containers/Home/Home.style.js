import styled from 'styled-components'
import Home from './Home'

const StyledHome = styled(Home)`
  width: 100vw;
  min-height: 100vh;
  background-color: #a9ddd6;

  & .container {
    display: flex;
    justify-content: space-between;
  }
`;

export default StyledHome;