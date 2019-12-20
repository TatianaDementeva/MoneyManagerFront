import React, { Component } from "react";
import FilterDate from "../filter-date/filter-date";
import Arrow from "../arrow/arrow";

class ReportExpense extends Component {
  state = {
    //isLoading: true,
    activeFilter: "ДЕНЬ",
    //commodities: [],
    //tags: [],
    today: new Date().getTime() //1544590780430 // new Date().getTime();
  };
  changeFilter = event => {
    const newFilter = event.currentTarget.dataset.filterCode;
    //const { today } = this.state;

    switch (newFilter) {
      case "ДЕНЬ":
        this.setState({ activeFilter: "ДЕНЬ" });
        console.log("Day");
        break;
      case "НЕДЕЛЯ":
        this.setState({ activeFilter: "НЕДЕЛЯ" });
        console.log("Week");
        break;
      case "МЕСЯЦ":
        this.setState({ activeFilter: "МЕСЯЦ" });
        console.log("Month");
        break;
      case "ГОД":
        this.setState({ activeFilter: "ГОД" });
        console.log("Year");
        break;
      default:
        console.log("Section is under development");
    }
  };
  createDate = time => {
    let day = time.getDate();
    if (toString(day).length === 1) day = `0${day}`;

    let month = time.getMonth();
    month += 1;
    if (toString(month).length === 1) month = `0${month}`;

    const date = `${day}.${month}.${time.getFullYear()}`;
    return date;
  };
  createDateForPrint() {
    const { activeFilter, today } = this.state;
    const toD = new Date(today);

    switch (activeFilter) {
      case "ДЕНЬ": {
        return this.createDate(toD);
      }

      case "НЕДЕЛЯ": {
        toD.setHours(0, 0, 0, 0);

        const week = toD.getDay();

        let startDay;

        if (week === 0) {
          startDay = toD - 6 * 86400000;
        } else startDay = toD.getTime() - (week - 1) * 86400000;

        startDay = this.createDate(new Date(startDay));
        let endDay = toD.getTime() + ((7 - week + 1) % 7) * 86400000;
        endDay = this.createDate(new Date(endDay));

        return `${startDay}-${endDay}`;
      }
      case "МЕСЯЦ": {
        let month = toD.getMonth();
        switch (month) {
          case 0:
            month = "Январь";
            break;
          case 1:
            month = "Февраль";
            break;
          case 2:
            month = "Март";
            break;
          case 3:
            month = "Апрель";
            break;
          case 4:
            month = "Май";
            break;
          case 5:
            month = "Июнь";
            break;
          case 6:
            month = "Июль";
            break;
          case 7:
            month = "Август";
            break;
          case 8:
            month = "Сентябрь";
            break;
          case 9:
            month = "Октябрь";
            break;
          case 10:
            month = "Ноябрь";
            break;
          case 11:
            month = "Декабрь";
            break;
          default:
            month = "Ошибка при определении месяца";
        }
        return month;
      }
      case "ГОД":
        return `${toD.getFullYear()}`;
      default:
        return "Ошибка при создании даты";
    }
  }
  changeDateOnLast = () => {
    const { today, activeFilter } = this.state;
    switch (activeFilter) {
      case "ДЕНЬ":
        this.setState({ today: today - 86400000 });
        break;
      case "НЕДЕЛЯ":
        this.setState({ today: today - 604800000 });
        break;
      case "МЕСЯЦ":
        this.setState({ today: today - 2592000000 });
        break;
      case "ГОД":
        this.setState({ today: today - 31536000000 });
        break;
      default:
        console.log("Uncorrect filter");
    }
  };
  changeDateOnFuture = () => {
    const { today, activeFilter } = this.state;
    switch (activeFilter) {
      case "ДЕНЬ":
        this.setState({ today: today + 86400000 });
        break;
      case "НЕДЕЛЯ":
        this.setState({ today: today + 604800000 });
        break;
      case "МЕСЯЦ":
        this.setState({ today: today + 2592000000 });
        break;
      case "ГОД":
        this.setState({ today: today + 31536000000 });
        break;
      default:
        console.log("Uncorrect filter");
    }
  };

  render() {
    const { activeFilter } = this.state;
    return (
      <div className="report-wrapper">
        <div className="reports-filters__wrapper">
          <FilterDate
            activeFilter={activeFilter}
            changeFilter={this.changeFilter}
          />
          <div className="upravlenie">
            <div className="right-arrow" onClick={this.changeDateOnLast}>
              <Arrow rotate="-180.0" strokeWidth="4" stroke="#282e33" />
            </div>
            <div className="date">{this.createDateForPrint()}</div>
            <div className="right-arrow" onClick={this.changeDateOnFuture}>
              <Arrow rotate="0.0" strokeWidth="4" stroke="#282e33" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReportExpense;
