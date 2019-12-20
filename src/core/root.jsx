import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Header from "../header/header";
import Add from "../add/add";

function Root() {
  return (
    <div>
      <Header />
      <Add />
    </div>
  );
}

export default Root;
