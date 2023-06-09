// import { useState } from 'react'
import Home from "./components/Home";
import Footer from "./components/Footer";
import Flower from "./components/Flower";
import Contact from "./components/Contact";
import Recipe from "./components/Recipe";
// import styled from "styled-components";
import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchFlowers } from "./store";

// const Main = styled.main`
//   font-family: Roboto, serif;
//   background-color: #3d7e61;
//   text-align: center;
//   height: 100vh;
// `;

// const Div = styled.div`
//   .image-container {
//     position: relative;
//     z-index: -1;
//   }
// `;

function Root() {
  return (
    <>
      {/* <Div className="image-container">
        <img src="../src/assets/img/contact.png" alt="" />
      </Div> */}
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFlowers());
  }, [dispatch]);
  const router = createHashRouter([
    {
      children: [
        { element: <Home />, path: "/" },
        { element: <Flower />, path: "/flower/:id" },
        { element: <Contact />, path: "/contact" },
        { element: <Recipe />, path: "/recipe/:id" },
      ],
      element: <Root />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
