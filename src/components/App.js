import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [counter, setCounter] = useState(0);
  const [money, setMoney] = useState(100);
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setSushis(data));
  }, []);

  function sushiRender() {
    return sushis.slice(counter * 4, counter * 4 + 4);
  }

  function setEaten(piece) {
    const remainingMoney = money - piece.price;
    if (remainingMoney >= 0) {
    
    setMoney(money - piece.price);

    setSushis(
      sushis.map((sushi) =>
        sushi.id === piece.id ? { ...sushi, eaten: true } : sushi
      )
    );
  }
  }
  return (
    <div className="app">
      <SushiContainer
        sushis={sushis}
        setSushis={setSushis}
        counter={counter}
        setCounter={setCounter}
        sushiRender={sushiRender}
        setEaten={setEaten}
      />
      <Table plates={sushis.filter((sushi) => sushi.eaten)} money={money} />
    </div>
  );
}

export default App;
