import React from "react";
interface IAppProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  addItem: () => void;
}
const Counter = ({ count, setCount, addItem }: IAppProps) => {
  return (
    <div>
      Counter is {count}
      <button onClick={() => addItem()}>+</button>
      {count > 0 ? (
        <button onClick={() => setCount((prev: number) => prev - 1)}>-</button>
      ) : null}
    </div>
  );
};

export default Counter;
