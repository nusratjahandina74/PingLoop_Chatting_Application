import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import SignUp from "./components/page/SignUp";
import Login from "./components/page/Login";
import firebaseConfig from "./components/firebase/firebaseConfig";
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
]);
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
