import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  let [clicked, setClicked] = React.useState("");

  let handleClick = () => {
    setClicked(true);
  };
  return (
    <div id="main">
      <button id="click" onClick={handleClick}>
        CLICK TO SEE PARA
      </button>
      {clicked ? (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
