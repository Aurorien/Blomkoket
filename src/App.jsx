// import { useState } from 'react'
import Home from "./components/Home";
import Footer from "./components/Footer";
import Flower from "./components/Flower";
import Contact from "./components/Contact";
import Recipe from "./components/Recipe";
import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchFlowers } from "./store";

function Root() {
  return (
    <>
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
