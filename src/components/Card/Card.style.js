import styled from 'styled-components'
import Card from './Card'

export const StyledCard = styled(Card)`
  margin-top: 0.5em;
  border: 5px solid #f3f7f0;
  background-color: #a93f55;
  padding: 0.3em;
  & h4 {
    text-shadow: 1px 2px #19323c;
  }
`;