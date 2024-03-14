import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import FoodItem from "./Pages/FoodItem/FoodItem";
import Home from "./Pages/Home/Home";
import SignIn from "./Pages/SignIn/SignIn";
import Category from "./Pages/Category/Category";
import OrderDetails from "./Pages/OrderDetails/OrderDetails";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./Pages/RootLayout/RootLayout";
import Report from "./Pages/Report/index";
function App() {
  const [userLogin, setUserLogin] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      id: "root",
      children: [
        { index: true, element: <Home /> },
        { path: "fooditem", element: <FoodItem /> },
        { path: "category", element: <Category /> },
        { path: "order-details", element: <OrderDetails /> },
        { path: "report", element: <Report /> },
      ],
    },
    {
      path: "/signIn",
      element: <SignIn />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
