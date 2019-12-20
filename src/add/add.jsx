import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Add extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="add-header">
            <div className="add-header__name">Покупка</div>
            <div className="add-header__name">Доход</div>
            
        </div>
      </div>
    );
  }
}

export default Add;