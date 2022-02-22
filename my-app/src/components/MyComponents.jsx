import { Children } from "react";

const MyComponent = ({ name2, name, Children }) => {
  return (
    <div>
      <div>나의 새롭고 멋진 컴포넌트 {name}</div>
      <div>{Children}</div>
    </div>
  );
};

export default MyComponent;
