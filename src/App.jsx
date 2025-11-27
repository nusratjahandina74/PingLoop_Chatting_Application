import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import SignUp from "./components/page/SignUp";
import firebaseConfig from "./components/firebase/firebaseConfig"
import Login from "./components/page/Login";
import ForgotPassword from "./components/page/ForgotPassword";
import Home from "./components/page/Home";
import Message from "./components/Message/Message";
import Setting from "./components/Setting/Setting";
function App() {
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />,
  },
  {
    path: "/message",
    element: <Message />,
  },
  {
    path: "/setting",
    element: <Setting />,
  },
]);
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App

