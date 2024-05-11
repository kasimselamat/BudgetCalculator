import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BudgetCalculator from './Components/BudgetCalculator/BudgetCalculator.js'
import Navigation from './Components/Navigation/Navigation.js'
import TableResult from './Components/TableResult/TableResult.js'

class App extends Component {

  constructor() {
    super();
    this.state = {
      isSignedIn: false,
      income: '',
      needs: '',
      wants: '',
      savings: ''
    }
  }

  onIncomeChanges = (event) => {
      // Prevent default form submission (not necessary here, but good practice)
      event.preventDefault();

      // Get the current value
      const newValue = event.target.value;

      // Filter out non-numeric characters using a regular expression
      const filteredValue = newValue.replace(/[^0-9]/g, '');

      // Update state only if the filtered value is different from the current value
      if (newValue !== filteredValue) {
          this.setState({ income: filteredValue });
          event.target.value = filteredValue;
      } else {
          this.setState({ income: filteredValue });
      }
  };

  onButtonEnter = (event) => {
      // if there are no value entered, alert the user
      if (this.state.income === '') {
          alert('Enter Your Income Amount');
      } else {
        this.state.income = Number(this.state.income);
        this.state.needs = (50 / 100) * this.state.income;
        this.state.wants = (30 / 100) * this.state.income;
        this.state.savings = (20 / 100) * this.state.income;

        const newRow = document.createElement("tr");

        const cell1 = document.createElement("td");
        cell1.className = "pv3 pr3 bb b--black-20";
        cell1.textContent = this.state.income;

        const cell2 = document.createElement("td");
        cell2.className = "pv3 pr3 bb b--black-20";
        cell2.textContent = this.state.needs;

        const cell3 = document.createElement("td");
        cell3.className = "pv3 pr3 bb b--black-20";
        cell3.textContent = this.state.wants;

        const cell4 = document.createElement("td");
        cell4.className = "pv3 pr3 bb b--black-20";
        cell4.textContent = this.state.savings;

        newRow.appendChild(cell1);
        newRow.appendChild(cell2);
        newRow.appendChild(cell3);
        newRow.appendChild(cell4);

        const tableBody = document.getElementById('table-body');
        tableBody.appendChild(newRow);

      }
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <BudgetCalculator onIncomeChanges={ this.onIncomeChanges } onButtonEnter={ this.onButtonEnter }/>
        <TableResult />
      </div>
    );

  }
}

export default App;
