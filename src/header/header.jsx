import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <header className="header">
          <div className="logo">Money Manager</div>
          <select className="button__report">
            <option disabled>Отчёты</option>
            <option>Расходы</option>
            <option>Доходы</option>
          </select>
          <div className="button__add">+ Добавить</div>
        </header>
      </div>
    );
  }
}

export default Header;