import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [num, setNum] = useState();
  const [name, setName] = useState();
  const [move, setMove] = useState();

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${num}`
      );
      console.log(response.data.name);
      setName(response.data.name);
      setMove(response.data.moves.length);
    }
    getData();
  });

  return (
    <div>
      <h1>
        you choose <span style={{ color: "red" }}>{num} value</span>
      </h1>
      ;
      <h1>
        My name is <span style={{ color: "red" }}>{name}</span>
      </h1>
      ;
      <h1>
        I have <span style={{ color: "red" }}>{move} moves</span>
      </h1>
      ;
      <select
        name="options"
        value={num}
        onChange={(event) => {
          setNum(event.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  );
};

export default App;
