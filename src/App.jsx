import Contact from "./components/Contact.tsx";
import Flower from "./components/Flower";
import GlobalStyled from "./globalStyled";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Recipe from "./components/Recipe.tsx";
import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchFlowers } from "./store";

function Root() {
  return (
    <>
      <GlobalStyled />
      <Navbar />
      <Outlet />
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
