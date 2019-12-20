import React, { Component } from "react";
import FilterDate from "../filter-date/filter-date";
import Arrow from "../arrow/arrow";

class ReportExpense extends Component {
  state = {
    //isLoading: true,
    activeFilter: "ДЕНЬ"
    //commodities: [],
    //tags: [],
    //today: new Date().getTime() //1544590780430 // new Date().getTime();
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
            <div className="right-arrow" /*onClick={this.changeDateOnLast}*/>
              <Arrow rotate="-180.0" strokeWidth="4" stroke="#282e33" />
            </div>
            <div className="date">date</div>
            <div className="right-arrow">
              <Arrow rotate="0.0" strokeWidth="4" stroke="#282e33" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReportExpense;
