import { useState } from "react";

const Display = ({ counter }) => <h2>العداد: {counter}</h2>;

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
);

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>تطبيق العداد</h1>
      <Display counter={counter} />

      <Button onClick={() => setCounter(counter + 1)} text="زيادة +1" />
      <Button onClick={() => setCounter(counter - 1)} text="نقصان -1" />
      <Button onClick={() => setCounter(0)} text="تصفير" />
    </div>
  );
};

export default Counter;
