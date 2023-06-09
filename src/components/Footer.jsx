/* eslint-disable react-refresh/only-export-components */

import styled from "styled-components";
import { Link } from "react-router-dom";

const Div = styled.footer`
  background-color: #86c2be;
  height: 8vh;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
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
    padding: 10px;
    font-size: 1.25rem;
    text-decoration: none;
    &:hover {
      font-size: 1.35rem;
    }
  }
`;
