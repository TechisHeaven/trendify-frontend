import "./App.css";
import Header from "./components/utils/Header/Header";
import Footer from "./components/utils/Footer/Footer";
import Billboard from "./components/pages/Billboard/index";
import Categories from "./components/pages/Categories/index";
import Sizes from "./components/pages/Sizes/index";
import Colors from "./components/pages/Colors/index";
import Products from "./components/pages/Products/index";
import Orders from "./components/pages/Orders/index";
import Home from "./components/pages/Home/index";
import Login from "./components/pages/Login/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HandleBillboard from "./components/pages/Billboard/HandleBillboard";
import HandleCategories from "./components/pages/Categories/HandleCategories";
import HandleSizes from "./components/pages/Sizes/HandleSizes";
import HandleColors from "./components/pages/Colors/HandleColors";
import HandleProduct from "./components/pages/Products/HandleProduct";
import API_container from "./components/utils/API_Container/API_Container";

function App() {
  const user = [];
  return (
    <>
      {!user && (
        <BrowserRouter>
          <Routes>
            {" "}
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Login />} />
          </Routes>
        </BrowserRouter>
      )}
      {user && (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/billboards" element={<Billboard />} />
            <Route
              path="/billboards/managebillboard/:type"
              element={<HandleBillboard />}
            />
            <Route path="/Categories" element={<Categories />} />
            <Route
              path="/Categories/manageCategories/:type"
              element={<HandleCategories />}
            />
            <Route path="/Sizes" element={<Sizes />} />
            <Route path="/Sizes/manageSizes/:type" element={<HandleSizes />} />
            <Route path="/Colors" element={<Colors />} />
            <Route
              path="/Colors/manageColors/:type"
              element={<HandleColors />}
            />
            <Route path="/products" element={<Products />} />
            <Route
              path="/products/manageProducts/:type"
              element={<HandleProduct />}
            />
            <Route path="/orders" element={<Orders />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <API_container/>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
