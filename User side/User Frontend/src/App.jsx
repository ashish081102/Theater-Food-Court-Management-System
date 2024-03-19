import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import RootLayout from "./Pages/RootLayout";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Authenticaion/Login/Login";
import Signup from "./Pages/Authenticaion/SignUp/Signup";

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
  ]);

  return <RouterProvider router={router} />;
}

export default App;
