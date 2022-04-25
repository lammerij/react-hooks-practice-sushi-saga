import React from "react";

function MoreButton({counter, setCounter}) {


  function handleClick(){
    setCounter(counter + 1)
}
  return <button onClick={handleClick}>More sushi!</button>;
}

export default MoreButton;
