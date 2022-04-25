import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";


function SushiContainer({sushis, setSushis, counter, setCounter, sushiRender, setEaten}) {




  return (
    <div className="belt">
            {sushiRender().map((sushi) =>(
      <Sushi sushi={sushi} key={sushi.id} handleEatSushi={setEaten}  />))}
      <MoreButton counter={counter} setCounter={setCounter} />
    
    </div>
  );
}

export default SushiContainer;
