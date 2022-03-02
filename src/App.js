import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";

function App() {
  return (
      <>
          <Header/>
          <Home/>

      </>

  );
}

export default App;
