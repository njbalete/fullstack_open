import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good+1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral+1)
  }
  const handleBadClick = () => {
    setBad(bad+1)
  }

  const values = {
    'good': good,
    'neutral': neutral,
    'bad': bad
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} name='good' />
      <Button handleClick={handleNeutralClick} name='neutral' />
      <Button handleClick={handleBadClick} name='bad' />
      <h1>statistics</h1>
      <Statistics values={values} />
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>{props.name}</button>
)
const StatisticLine = (props) => (
  <div>{props.text} {props.value}</div>
)
const Statistics = (props) => {
  const good = props.values.good
  const neutral = props.values.neutral
  const bad = props.values.bad
  const total = good+neutral+bad
  if (total === 0) {
    return (
      <div>No feedback given</div>
    )
  }
  return (
    <div>
      <StatisticLine value={good} text='good' />
      <StatisticLine value={neutral} text='neutral' />
      <StatisticLine value={bad} text='bad' />
      <StatisticLine value={good+neutral+bad} text='all' />
      <StatisticLine value={(good-bad)/total} text='average' />
      <StatisticLine value={good/total*100+"%"} text='positive' />
    </div>
  )
}

export default App