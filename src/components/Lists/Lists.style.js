import styled from 'styled-components'
import ListsContainer from './Lists'

export const StyledLists = styled(ListsContainer)`
  width: 100%;
  min-height: 100vh;
  background-color: #91adc2;
  display: flex;
  flex-direction: column;
  & h2{
    color: white;
    text-align: center;
  }
`;