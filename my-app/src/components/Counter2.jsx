import { useState } from "react";
const Counter2 = () => {
  const [number, setNumber] = useState(7);
  const handleNumber = (n) => setNumber((prev) => prev + n);

  const Counting = () => {
    setNumber(number - 1);
    console.log(number);
  };

  const Counting2 = () => {
    setNumber(number + 1);
    console.log(number);
  };

  return (
    <>
      <h2>{number}</h2>
      <button onClick={Counting2}>+1</button>
      <button onClick={() => handleNumber(1)}>+1</button>
      <button onClick={Counting}>-1</button>
    </>
  );
};

export default Counter2;
