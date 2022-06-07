import React from "react";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Books from "./components/Books";
import Footer from "./components/Footer";
import BookDetail from "./components/BookDetail";
import { Routes, Route } from "react-router-dom";

function App() {
  const container = (
    <React.Fragment>
      <Banner />
      <Books />
    </React.Fragment>
  );

  return (
    <div className="App">
      <Header />
      <Footer />
      <Routes>
        <Route path="/" element={container} />
        <Route path="/:id" element={<BookDetail />} />
      </Routes>
    </div>
  );
}

export default App;
