/* eslint-disable react-refresh/only-export-components */

import styled from "styled-components";
import { Link } from "react-router-dom";

const Div = styled.nav`
  display: flex;
  height: 200px;
  justify-content: flex-end;
  overflow: hidden;
  position: fixed;
  right: 10px;
  top: 0;
  width: auto;
  z-index: 3;
`;

function Navbar(props) {
  return (
    <Div className={props.className}>
      <div className="navbar-div">
        <div className="link-wrapper">
          <Link to="/" style={{ padding: "5px 8px 9px 5px" }}>
            Hem
          </Link>
        </div>
        <div className="link-wrapper">
          <Link to="/contact" style={{ padding: "9px 8px 5px 5px" }}>
            Kontakt
          </Link>
        </div>
      </div>
    </Div>
  );
}

// below, styling Link as a because that is what it becomes rendered
export default styled(Navbar)`
  a {
    color: #091218;
    font-size: 1rem;
    text-decoration: none;
    width: fit-content;
    background-color: rgb(236, 241, 245, 0.8);
    border-radius: 15px 0px 15px 20px;
    box-shadow: 2px 2px 5px rgb(200, 219, 232), -2px 2px 5px rgb(214, 231, 243),
      -2px 2px 8px rgb(200, 224, 242), 2px 2px 8px rgb(197, 220, 236),
      -2px -2px 8px rgb(200, 224, 242), -2px -2px 8px rgb(197, 220, 236);
    &:hover {
      color: #00a6ff;
    }
    /* &:visited {
      color: #527a97;
    } */
    @media (min-width: 600px) {
      /* margin-right: 20px; */
    }
  }

  .link-wrapper {
    height: 30px;
    margin: 5px 0px 20px 0;
    padding: 3px;
  }

  .navbar-div {
    display: flex;
    flex-direction: column;
    height: 100px;
    padding-top: 10px;
    padding-right: 7px;
    text-align: end;
    width: 90px;
    z-index: 4;
    @media (min-width: 600px) {
      justify-content: flex-end;
    }
  }
`;
