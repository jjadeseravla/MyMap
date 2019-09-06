import React from "react";
import "./DataTable.css";

const DataTable = props => {
  return (
    <table id="table">
      <tbody>
        <tr>
          <td data-testid="allowance">
            <div className="data">{props.allowance}</div>
            <div>Allowance</div>
          </td>
          <td data-testid="spent">
            <div className="data">{props.total_spend}</div>
            <div>Spent</div>
          </td>
          <td data-testid="remaining">
            <div className="data">{props.remaining_balance}</div>
            <div>Remaining</div>
          </td>
        </tr>
        <tr>
          <td data-testid="daysAllowance">
            <div className="data">{props.days_allowance}</div>
            <div>Training days</div>
          </td>
          <td data-testid="daysSpent">
            <div className="data">{props.days_spent}</div>
            <div>Spent</div>
          </td>
          <td data-testid="daysRemaining">
            <div className="data">{props.days_remaining}</div>
            <div>Remaining</div>
          </td>
        </tr>
        <tr />
      </tbody>
    </table>
  );
};

export default DataTable;