import { useState } from "react";

const Header = () => {
  return <h1>Give Feedback</h1>;
};

const StatisticLine = ({ text, val }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{val}</td>
    </tr>
  );
};

const Statistics = ({ good, bad, neutral }) => {
  return (
    <>
      <h2>Statistics</h2>
      <table>
        <StatisticLine text="Good" val={good} />
        <StatisticLine text="Neutral" val={neutral} />
        <StatisticLine text="Bad" val={bad} />
        <StatisticLine text="All" val={good + bad + neutral} />
        <StatisticLine
          text="Average Score"
          val={(good - bad) / (good + bad + neutral)}
        />
        <StatisticLine
          text="Positive Percent"
          val={(good * 100) / (good + bad + neutral)}
        />
      </table>
    </>
  );
};

const Button = ({ props }) => {
  let { name, val, setVal } = props;
  return <button onClick={() => setVal(val + 1)}>{name}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header />

      <Button props={{ name: "Good", val: good, setVal: setGood }} />
      <Button props={{ name: "Neutral", val: neutral, setVal: setNeutral }} />
      <Button props={{ name: "Bad", val: bad, setVal: setBad }} />

      {good + bad + neutral <= 0 ? (
        <h3>No feedback given</h3>
      ) : (
        <Statistics good={good} bad={bad} neutral={neutral} />
      )}
    </div>
  );
};

export default App;
