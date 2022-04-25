import styled from 'styled-components'
import ListsContainer from './Lists'

export const StyledLists = styled(ListsContainer)`
  /* border: 2px solid red; */
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  & h2 {
    color: white;
    text-align: center;
  }
`;