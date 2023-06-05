// import { useState } from 'react'
import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Flower from "./components/Flower";
import Contact from "./components/Contact";
import styled from "styled-components";
import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";

const Main = styled.main`
  font-family: Roboto, serif;
  background-color: #3d7e61;
  text-align: center;
  height: 100vh;
`;

function Root() {
  return (
    <Main>
      <Outlet />
      <Footer />
    </Main>
  );
}

function App() {
  const router = createHashRouter([
    {
      children: [
        { element: <Home />, path: "/" },
        { element: <Flower />, path: "/flower/:id" },
        { element: <Contact />, path: "/contact" },
      ],
      element: <Root />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

// export default styled(App)`
//   div {
// background-color: #44dea0;
// text-align: center;
//   }
// `
