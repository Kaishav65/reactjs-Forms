import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const Pokemon = () => {
  const [num, setNum] = useState("number");
  const [name, setName] = useState("name");
  const [moves, setMoves] = useState("moves");

  useEffect(() => {
    // alert("Pokemon");
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      console.log(res);
      // console.log(setName(res.data.name));;
      // console.log(setMoves(res.data.moves));
      setName(res.data.name);
      setMoves(res.data.moves.length);
    }
    getData();
  });

  return (
    <div>
      <h1>
        {" "}
        You Choose Pokemon <span style={{ color: "red" }}>{num}</span>
      </h1>
      <h2>
        My name is <span style={{ color: "red" }}>{name}</span>
      </h2>
      <h2>
        I Have <span style={{ color: "red" }}>{moves}</span>
      </h2>
      <select
        value={num}
        onChange={(e) => {
          setNum(e.target.value);
        }}
      >
        <option value="1">American Black Bear</option>
        <option value="2">Asiatic Black Bear</option>
        <option value="25">Brown Bear</option>
        <option value="4">Giant Panda</option>
        <option value="5">Sloth Bear</option>
        <option value="6">Sun Bear</option>
        <option value="7">Polar Bear</option>
        <option value="8">Spectacled Bear</option>
      </select>
    </div>
  );
};

export default Pokemon;
