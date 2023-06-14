/* eslint-disable react-refresh/only-export-components */

import styled from "styled-components";
import { Link } from "react-router-dom";

const Div = styled.footer`
  background-color: #86c2be;
  bottom: 0;
  display: flex;
  height: 8vh;
  justify-content: space-around;
  left: 0;
  position: fixed;
  width: 100%;
  @media (min-width: 600px) {
    justify-content: flex-end;
  }
`;

function Footer(props) {
  return (
    <Div className={props.className}>
      <Link to="/">Hem</Link>
      <Link to="/contact">Kontakt</Link>
    </Div>
  );
}

// below, styling Link as a because that is what it becomes rendered
export default styled(Footer)`
  a {
    color: #7005b3;
    font-size: 1rem;
    margin-top: 6px;
    padding: 10px;
    text-decoration: none;
    width: 3rem;
    &:hover {
      font-size: 1.35rem;
    }
    @media (min-width: 600px) {
      margin-right: 70px;
    }
  }
`;
