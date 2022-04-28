import styled from 'styled-components'
import ListsContainer from './Lists'

export const StyledLists = styled(ListsContainer)`
  /* border: 2px solid red; */
  width: 100%;
  display: flex;
  padding: 0.3em;
  justify-content: space-between;
  & h2 {
    color: white;
    text-align: center;
  }
`;