import React, { Component } from "react";
import createRequest from "../core/create-request";
import { fetchAllTags, createCommidity } from "../core/api-config";

class Add extends Component {
  state = {
    tags: [],
    nameExpense: "",
    priceExpense: "",
    tagExpense: "",
    dateExpense: "",
    nameProfit: "",
    priceProfit: "",
    dateProfit: ""
  };

  componentDidMount() {
    createRequest(fetchAllTags).then(response => {
      if (response.status === "OK") {
        this.setState({ tags: response.data });
      }
      console.log("RESPONSE TAGS", response);
    });
  }

  handleInputChange = event => {
    const target = event.target;

    var value = target.type === "text" ? target.value : null;
    value = target.type === "number" ? target.value : value;
    value = target.type === "select-one" ? target.value : value;
    value = target.type === "date" ? Date.parse(target.value) : value;

    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  onSubmit = event => {
    const {
      tagExpense,
      nameExpense,
      dateExpense,
      priceExpense
      //nameProfit,
      //priceProfit
    } = this.state;

    event.preventDefault();

    const nameAPI = event.currentTarget.name;

    if (nameAPI === "Expense") {
      if (
        tagExpense !== "" &&
        nameExpense !== "" &&
        dateExpense !== "" &&
        priceExpense !== ""
      ) {
        console.log("All fields not null ");
        createRequest(createCommidity, null, {
          expense: {
            date: dateExpense,
            name: nameExpense,
            price: priceExpense,
            tag: tagExpense
          }
        }).then(response => {
          console.log(response.status);
        });
        this.setState({
          dateExpense: "",
          nameExpense: "",
          priceExpense: "",
          tagExpense: ""
        });
      }
    }
    if (nameAPI === "Profit") {
      /*if (
            nameProfit !== "" &&
            priceProfit !== ""
          ) {
            console.log("All fields not null ");
            createRequest(createCommidity, null, {
              commodity: {
                date: dateExpense,
                name: nameExpense,
                price: priceExpense,
                tag: tagExpense
              }
            });
            this.setState({
              dateExpense: "",
              nameExpense: "",
              priceExpense: "",
              tagExpense: ""
            });
          }*/
      console.log("profit");
    }
  };
  render() {
    const {
      tags,
      nameExpense,
      priceExpense
      // nameProfit,
      //priceProfit
    } = this.state;
    return (
      <div className="wrapper">
        <div className="add-header">
          <div className="add-header__name">Покупка</div>
        </div>
        <div className="add-expense">
          <form
            className="add-commodities"
            onSubmit={this.onSubmit}
            name="Expense"
          >
            <input
              className="add-commodities__name"
              type="date"
              name="dateExpense"
              placeholder="Дата: дд.мм.гггг"
              //value={dateExpense}
              onChange={this.handleInputChange}
            />
            <input
              className="add-commodities__name"
              type="text"
              name="nameExpense"
              placeholder="Покупка"
              value={nameExpense}
              onChange={this.handleInputChange}
            />
            <input
              className="add-commodities__price"
              type="number"
              min="1"
              name="priceExpense"
              placeholder="Цена"
              value={priceExpense}
              onChange={this.handleInputChange}
            />
            <select
              className="add-commodities__tag"
              onChange={this.handleInputChange}
              name="tagExpense"
            >
              <option selected disabled>
                Категория покупки
              </option>
              {tags.map(item => (
                <option value={item.id} key={item.id}>
                  {item.tag}
                </option>
              ))}
            </select>
            <input
              className="add-commodities__button"
              type="submit"
              name="Expense"
              value="Добавить"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Add;
