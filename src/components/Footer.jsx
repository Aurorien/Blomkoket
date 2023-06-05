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

function Footer() {
  return (
    <Div>
      <Link to="/">Hem</Link>
      <Link to="/contact">Kontakt</Link>
    </Div>
  );
}

export default styled(Footer)`
  Link {
    color: #7005b3;
    padding: 15px;
    font-size: 1.4rem;
  }
`;
