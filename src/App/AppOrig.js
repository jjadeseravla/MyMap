import React from "react";
import "./App.css";
import Card from "./Card/Card";
import Heading from "./Heading/Heading";
import Info from "./Info/Info";
import { API_URL } from '../config';

function App() {
  const [id, setId] = React.useState("");
  const [data, setData] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSubmit = async event => {
    event.preventDefault();
    if (inputsCorrect()) {
      await fetch(`${API_URL}/${id}`)
        .then(res => res.json())
        .then(responseData => setData(responseData))
        .catch(handleError);
    }
  };

  const handleError = error => {
    setError("Please enter a valid ID");
    console.log(error);
  };

  const handleChange = event => {
    setId(event.target.value);
    setError("");
  };

  const inputsCorrect = () => {
    if (id === "") {
      setError("Text box cannot be empty");
      return false;
    } else if (id.length !== 5) {
      setError("ID must be 5 digits long");
      return false;
    }
    return true;
  };

  const trimTrailing = () => {
    data.allowance = checkDecimals(data.allowance);
    data.total_spend = checkDecimals(data.total_spend);
    data.remaining_balance = checkDecimals(data.remaining_balance);
  };

  const checkDecimals = figure => {
    let floatFigure = parseFloat(figure.substring(1));
    floatFigure = Math.trunc(floatFigure);
    return "£" + floatFigure;
  };

  if (!data) {
    return (
      <React.Fragment>
        <h1 data-testid="heading">PDB Tracker App</h1>
        <h2>Please enter your employee ID</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Employee ID:
            <input
              data-testid="input"
              type="number"
              onChange={handleChange}
              value={id}
            />
          </label>
          <p data-testid="errorMessage">{error}</p>
          <input data-testid="submitButton" type="submit" value="Submit" />
        </form>
      </React.Fragment>
    );
  } else {
    trimTrailing();
    return (
      <React.Fragment>
        <div className="container">
          <Heading />
          <Card data={data} id={id} />
          <Info />
        </div>
      </React.Fragment>
    );
  }
}
export default App;