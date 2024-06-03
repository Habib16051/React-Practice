import { useState, useEffect } from "react";
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
import axios from "axios";

const person = {
  name: "Habib",
  age: 28,
  message: "Welcome to Bangladesh",
  numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};

function App() {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    const response = await axios.get("http://localhost:3001/posts");
    setUsers(response.data);
  };

  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <>
      <Navbar person={person} />
      <br />
      <Fruits />
      <br />
      {/* JSON Server and fetch data using axios */}
      <nav>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.title}</li>
          ))}
        </ul>
      </nav>

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
