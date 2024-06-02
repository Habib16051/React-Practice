import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Fruits from "./components/Fruits";
import ConditionalComponent from "./components/ConditionalComponent";
import Message from "./components/Message";
import Form from "./components/Form";
import Search from "./components/Search";
import Search_2 from "./components/Search_2";
import UserProfile from "./components/UserProfile";
import UserProfile2 from "./components/UserProfile2";
// import UserProfile2 from "./components/ContextApi/UserProfile2";
import Home from "./components/ReactRouter/Home";
import About from "./components/ReactRouter/About";
import Contact from "./components/ReactRouter/Contact";
import NotFound from "./components/ReactRouter/NotFound";
import NavBar from "./components/ReactRouter/NavBar";

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
      <UserProfile />
      <br />
      <UserProfile2 />
      <br />

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      <ConditionalComponent />
      <br />
      <Message />
      <br />

      <br />
      <br />
      <Form />
      <br />
      {/* <Search /> */}
      <br />
      <Search_2 />
    </>
  );
}

export default App;
