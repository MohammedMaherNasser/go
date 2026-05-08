import { useState } from "react";

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;

  if (total === 0) return <p>لا توجد تقييمات بعد</p>;

  return (
    <table>
      <tbody>
        <StatisticLine text="جيد" value={good} />
        <StatisticLine text="عادي" value={neutral} />
        <StatisticLine text="سيء" value={bad} />
        <StatisticLine text="المجموع" value={total} />
        <StatisticLine text="المعدل" value={((good - bad) / total).toFixed(2)} />
        <StatisticLine
          text="النسبة الإيجابية"
          value={`${((good / total) * 100).toFixed(1)}%`}
        />
      </tbody>
    </table>
  );
};

const Unicafe = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Unicafe</h1>

      <button onClick={() => setGood(good + 1)}>جيد</button>
      <button onClick={() => setNeutral(neutral + 1)}>عادي</button>
      <button onClick={() => setBad(bad + 1)}>سيء</button>

      <h2>الإحصائيات</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default Unicafe;
