import { useState } from "react";

const useCount = (initialState = 0) => {
  const [count, setCount] = useState(initialState);
  const add = () => setCount((prev) => prev + 1);
  const subtract = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return { count, add, subtract, reset };
};

export default useCount;
