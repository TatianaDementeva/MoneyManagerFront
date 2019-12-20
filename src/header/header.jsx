import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <header className="header">
          <div className="logo">Money Manager</div>
          <select className="button__report">
            <option selected disabled>
              Отчёты
            </option>
            <option>
              <NavLink className="button__add" to="/reports/expense">
                Расходы
              </NavLink>
            </option>
            <option>Доходы</option>
          </select>
          <NavLink exact className="button__add" to="/reports/expense">
            + Добавить
          </NavLink>
        </header>
      </div>
    );
  }
}

export default Header;
