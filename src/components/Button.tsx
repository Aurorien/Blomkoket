import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${(props) => props.color};
  border-radius: 30%;
  &:hover {
    background-color: blanchedalmond;
  }
`;
