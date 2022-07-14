import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Pay from './pages/Pay';
import Success from './pages/Success';
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Pay />} />
        <Route path="success" element={<Success />} />
      </Routes>
  )

};

export default App;