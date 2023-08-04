import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/utils/Header/Header";
import Login from "./components/pages/Login/index";
import Register from "./components/pages/Login/register";
import Home from "./components/pages/Home/index";
import Category from "./components/pages/Category/index";
import Profile from "./components/pages/Profile/index";
import Product from "./components/pages/Product/index";
import CartPage from "./components/pages/CartPage/index";
import Checkout from "./components/pages/Checkout/index";
import { useStateContext } from "./state";
import Footer from "./components/utils/Footer/footer";

function App() {
  const state = useStateContext();
  const { user } = state.user;
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
