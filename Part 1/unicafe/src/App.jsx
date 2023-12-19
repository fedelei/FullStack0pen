import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (all === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <>
        <table>
          <tbody>
            <tr>
              <td>good</td>
              <td>
                <StatisticLine value={good} />
              </td>
            </tr>
            <tr>
              <td>neutral</td>
              <td>
                <StatisticLine value={neutral} />
              </td>
            </tr>
            <tr>
              <td>bad</td>
              <td>
                <StatisticLine value={bad} />
              </td>
            </tr>
            <tr>
              <td>all</td>
              <td>
                <StatisticLine value={all} />
              </td>
            </tr>
            <tr>
              <td>average</td>
              <td>
                <StatisticLine value={(average / all)} />
              </td>
            </tr>
            <tr>
              <td>percentage</td>
              <td>
                <StatisticLine value={positive} />
              </td>
            </tr>
          </tbody>
        </table>
    </>
  );
};

const StatisticLine = ({ value, text }) => {
  return (
    <>
      <p>
        {text} {value}
      </p>
    </>
  );
};

const App = () => {
 
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;
  const average = good * 1 + neutral * 0 + bad * -1;
  const positive = (good / all) * 100;

  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1>statistics.</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </>
  );
};

export default App;
