import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import SignUp from "./components/page/SignUp";
import Login from "./components/page/Login";
import firebaseConfig from "./components/firebase/firebaseConfig";
import ForgotPassword from "./components/page/ForgotPassword";
function App() {
const router = createBrowserRouter([
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
]);
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
