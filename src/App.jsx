

import ProductDetail from "./features/product-list/components/ProductDetail";
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
    path:"/product-detail",
    element: <ProductDetailPage></ProductDetailPage>
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
