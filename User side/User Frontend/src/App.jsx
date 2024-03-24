import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import RootLayout from "./Pages/RootLayout";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Authenticaion/Login/Login";
import Signup from "./Pages/Authenticaion/SignUp/Signup";
import SingleProduct from "./Components/SingleProduct/SingleProduct";

//for testing delete after wok is done
//start

import FoodData from "./data/FoodList.json";
import Shop from "./Pages/Shop/Shop";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
//end-- delete this

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      id: "root",
      errorElement: <h1>Sorry Page Not Found</h1>,
      children: [{ index: true, element: <Home /> }],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/sign-up",
      element: <Signup />,
    },
    {
      path: "/shop",
      element: <Shop />,
    },
    {
      path: "/product/:productId",
      element: <ProductDetail />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
