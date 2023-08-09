import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import Cart from "./Pages/Cart";
import ProductDetails from "./Pages/ProductDetails";
import Checkout from "./Pages/Checkout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="productDetails/:id" element={<ProductDetails />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
