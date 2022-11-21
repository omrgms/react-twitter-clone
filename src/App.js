import React from "react";
import "./index.css";
import Container from "./layout/Container";
import Sidebar from "./layout/Sidebar";
import Content from "./layout/Content";
import Witgets from "./layout/Widgets";

const App = () => {
  return (
    <Container>
      <Sidebar/>
      <Content/>
      <Witgets/>
    </Container>
    
  )
}

export default App