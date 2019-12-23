import React, { useState, useEffect } from "react";
import "./Card.css";
import Name from "./Name/Name";
import DataTable from "./DataTable/DataTable";
import RequestButton from "./RequestButton/RequestButton";
import { useAuth0 } from "../../react-auth0-spa";
import { API_URL } from '../../config';

const Card = () => {

  const [data, setData] = useState(0);

  const { user } = useAuth0();

  useEffect((user) => {
    const fetchProfile = async() => {
      console.log("herrrrrrre");
      await fetch(`${API_URL}/api?email=jade.alvares@thoughtworks.com`) //`${API_URL}/api/${user.email}`
        .then(res => res.json())
        .then(responseData => setData(responseData))
      }
    fetchProfile();
  }, [setData]);

  return (
    <div className="content">
      <div id="userImage" />
      <div id="banner" />
      <Name id={data.id} />
      <DataTable
        allowance={data.allowance}
        total_spend={data.total_spend}
        remaining_balance={data.remaining_balance}
        days_allowance={data.days_allowance}
        days_spent={data.days_spent}
        days_remaining={data.days_remaining}
      />
      <RequestButton />
    </div>
  );
};

export default Card;
