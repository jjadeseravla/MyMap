// require('dotenv').config()

// src/App.js

import React from "react";
import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-spa";
import Card from "./App/Card/Card";
import Profile from "./Profile";

function App() {
  const { loading } = useAuth0();

  if ( loading ) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <Card />
    </div>
  );
}

export default App;

//Card needs some data which is on API
