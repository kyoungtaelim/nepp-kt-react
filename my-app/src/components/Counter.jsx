import { useState } from "react";
const Counter = () => {
  //   const array = [1, 2];
  //   //   const one = array[0];
  //   //   const two = array[1];
  //   const [one, two] = array;
  const [number, setNumber] = useState(0);
  //   let number = 0;
  const handleClick = () => {
    // number += 1;
    // console.log("number");
    setNumber(number + 1);
    console.log(number);
  };

  return (
    <>
      <h2>{number}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  );
};

export default Counter;
