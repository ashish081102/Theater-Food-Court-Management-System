import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import RootLayout from "./Pages/RootLayout";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Authenticaion/Login/Login";
import Signup from "./Pages/Authenticaion/SignUp/Signup";
import Cart from "./Pages/Cart/Cart";
import Wishlist from "./Pages/WishList/WishList";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      id: "root",
      errorElement: <h1>Sorry Page Not Found</h1>,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/sign-up",
          element: <Signup />,
        },
        {
          path: "/cart-detail",
          element: <Cart />,
        },
        {
          path: "/wishlist",
          element: <Wishlist />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
