import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Fruits from "./components/Fruits";
import ConditionalComponent from "./components/ConditionalComponent";
import Message from "./components/Message";
import Form from "./components/Form";
// import Search from "./components/Search";
import Search_2 from "./components/Search_2";
import Home from "./components/ReactRouter/Home";
import Product from "./components/ReactRouter/Product";
import ProductList from "./components/ReactRouter/ProductList";

const person = {
  name: "Habib",
  age: 28,
  message: "Welcome to Bangladesh",
  numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};

function App() {
  return (
    <>
      <Navbar person={person} />
      <br />
      <Fruits />
      <br />
      <br />
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          {/* Dynamic routing  */}
          <Route path="/product/:productId" element={<Product />} />
        </Routes>
      </Router>
      <ConditionalComponent />
      <br />
      <Message />
      <br />
      <Form />
      <br />
      <Search_2 />
    </>
  );
}

export default App;
