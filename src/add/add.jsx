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
        <div className="add-expense">
          <form className="add-commodities" onSubmit={this.onSubmit}>
            <input
              className="add-commodities__name"
              type="text"
              name="name"
              placeholder="Дата: дд.мм.гггг"
              ref={this.dateRef}
            />
            <input
              className="add-commodities__name"
              type="text"
              name="name"
              placeholder="Покупка"
              ref={this.nameRef}
            />
            <input
              className="add-commodities__price"
              type="text"
              name="price"
              placeholder="Цена"
              ref={this.priceRef}
            />
            <input
              className="add-commodities__button"
              type="submit"
              value="Добавить"
            />
          </form>
        </div>
        <div className="add-expense">
          <form className="add-commodities" onSubmit={this.onSubmit}>
            <input
              className="add-commodities__name"
              type="text"
              name="name"
              placeholder="Дата: дд.мм.гггг"
              ref={this.dateRef}
            />
            <input
              className="add-commodities__name"
              type="text"
              name="name"
              placeholder="Покупка"
              ref={this.nameRef}
            />
            <input
              className="add-commodities__price"
              type="text"
              name="price"
              placeholder="Цена"
              ref={this.priceRef}
            />
            <input
              className="add-commodities__button"
              type="submit"
              value="Добавить"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Add;
