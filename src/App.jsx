import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Pay from './pages/Pay';
import Success from './pages/Success';
import { Routes, Route, Link,Navigate } from "react-router-dom";

const App = () => {
  const user = false
  return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="products/:category" element={<ProductList />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login"
            element={ user ? <Navigate to="/" /> : <Login /> }
            />
        <Route path="register"
            element={ user ? <Navigate to="/" /> : <Register /> }
            />
        <Route path="success" element={<Success />} />
        <Route path="pay" element={<Pay />} />
        <Route path="success" element={<Success />} />



      </Routes>
  )

};

export default App;