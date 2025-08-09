
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  }
])

function App() {

  return (
  <div> 
    <RouterProvider router={router}/>
  </div>
  )
}

export default App