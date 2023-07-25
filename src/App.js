import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PreNavbar from "./components/PreNavbar.jsx";
import NavBar from "./components/NavBar.jsx";
import Content from "./components/Content.jsx";
import Cards from "./components/Cards.jsx";
import QueryForm from "./components/QueryForm.jsx";
import HWFooter from "./components/HWFooter.jsx";

function App() {
   return (
    <div className="App">
      <PreNavbar/>
      <NavBar/>
      <Content/>
      <Cards/>
      <QueryForm/>
      <HWFooter/>
    </div>
  );
}

export default App;
