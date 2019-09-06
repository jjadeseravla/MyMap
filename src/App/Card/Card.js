import React from "react";
import "./Card.css";
import Name from "./Name/Name";
import DataTable from "./DataTable/DataTable";
import RequestButton from "./RequestButton/RequestButton";

const Card = props => {
  return (
    <div className="content">
      <div id="userImage" />
      <div id="banner" />
      <Name id={props.id} />
      <DataTable
        allowance={props.data.allowance}
        total_spend={props.data.total_spend}
        remaining_balance={props.data.remaining_balance}
        days_allowance={props.data.days_allowance}
        days_spent={props.data.days_spent}
        days_remaining={props.data.days_remaining}
      />
      <RequestButton />
    </div>
  );
};

export default Card;