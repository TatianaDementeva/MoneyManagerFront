import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <header className="header">
          <div className="logo">Money Manager</div>
          <nav className="navigation">
            <NavLink className="expenses" to="/reports/expense">
              Расходы
            </NavLink>
          </nav>
          <NavLink exact className="button__add" to="/">
            + Добавить
          </NavLink>
        </header>
      </div>
    );
  }
}

export default Header;
