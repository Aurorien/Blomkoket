import styled from "styled-components";

interface ButtonProps {
  activebgcolor?: React.CSSProperties["backgroundColor"];
  bcolor?: React.CSSProperties["borderColor"];
  bgcolor?: React.CSSProperties["backgroundColor"];
  children: React.ReactNode;
  color?: React.CSSProperties["color"];
  disabled?: boolean;
  hoverbcolor?: React.CSSProperties["borderColor"];
  hoverbgcolor?: React.CSSProperties["backgroundColor"];
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => props.bgcolor || "rgb(47, 152, 64)"};
  border-color: ${(props) => props.bcolor || "rgb(145, 225, 243,.3)"};
  border-radius: 30%;
  box-shadow: 2px 2px 7px black, -2px 0px 7px black;
  color: ${(props) => props.color || "white"};
  padding: 7px 10px;
  &:hover:not(:disabled) {
    background-color: ${(props) => props.hoverbgcolor || "rgb(48, 162, 31)"};
    border-color: ${(props) => props.hoverbcolor || "#44fa2c;"};
    &:active {
      background-color: ${(props) => props.hoverbgcolor || "rgb(202, 83, 24)"};
      text-shadow: 1px 1px 2px darkgrey;
    }
  }
`;

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <StyledButton type="submit" {...props}>
      {children}
    </StyledButton>
  );
};
