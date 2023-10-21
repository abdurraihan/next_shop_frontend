

import Protected from "./features/auth/components/Protected";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home"
import LoginPage from "./pages/LoginPage"
import ProductDetailPage from "./pages/ProductDetailPage";

import SignupPage from "./pages/SignupPage"


import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>
  },
  {
    path:"/signup",
    element: <SignupPage></SignupPage>

  },
  {
    path:"/cart",
    element:<CartPage></CartPage>
  },
  {
    path:"/checkout",
    element:<Checkout></Checkout>
  },
  {
    path:"/product-detail/:id",

    element: <Protected> <ProductDetailPage></ProductDetailPage> </Protected> 
  }
])

function App() {
  

  return (
    <div>
      <RouterProvider router={router} />
    </div>
    
  )
}

export default App
