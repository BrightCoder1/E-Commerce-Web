import BottomFooter from "./Components/BottomFooter";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";
import NavbarComponent from "./Components/NavbarComponent"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./Components/Product";
import ShopPage from "./Components/ShopPage";
import Blog from "./Components/Blog";
import Login from "./Components/Signup";
import Register from "./Components/Register";
import ContactPage from "./Components/ContactPage";
import OrderDetails from "./Components/OrderDetails";

const App = () => {
  return (
    <>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Product />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/order" element={<OrderDetails />} />
        </Routes>
        <Footer />
        <BottomFooter />
      </Router>
    </>
  )
}

export default App;