import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "../header/header";
import Add from "../add/add";
import ReportExpense from "../report-expense/report-expense";

function Root() {
  return (
    <BrowserRouter>
      <>
        <Header />

        <Route exact path="/" component={Add} />
        <Route path="/reports/expense" component={ReportExpense} />
      </>
    </BrowserRouter>
  );
}

export default Root;
