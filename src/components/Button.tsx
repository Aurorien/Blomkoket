import styled from 'styled-components'

interface ButtonProps {
  bcolor?: React.CSSProperties['borderColor'],
  bgcolor?: React.CSSProperties['backgroundColor'],
  color?: React.CSSProperties['color'],
  children: React.ReactNode,
  disabled?: boolean,
  hoverbcolor?: React.CSSProperties['borderColor'],
  hoverbgcolor?: React.CSSProperties['backgroundColor'],
  activebgcolor?: React.CSSProperties['backgroundColor']
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => props.bgcolor || "rgb(47, 152, 64)"};
  color: ${(props) => props.color || "white"};
  border-radius: 30%;
  border-color: ${(props) => props.bcolor || "rgb(145, 225, 243,.3)"};
  padding: 7px 10px;
  box-shadow: 2px 2px 7px black, -2px 0px 7px black;
  &:hover:not(:disabled) {
    border-color:${(props) => props.hoverbcolor || "#44fa2c;"};
    background-color:${(props) => props.hoverbgcolor || "rgb(48, 162, 31)"};
    &:active {
      background-color: ${(props) => props.hoverbgcolor || "rgb(202, 83, 24)"};
      text-shadow: 1px 1px 2px darkgrey;
    }
  }
`

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <StyledButton type="submit" {...props}>
      {children}
    </StyledButton>
  );
};
