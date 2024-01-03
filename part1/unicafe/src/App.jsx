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

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} name='good' />
      <Button handleClick={handleNeutralClick} name='neutral' />
      <Button handleClick={handleBadClick} name='bad' />
      <h1>statistics</h1>
      <Content label={good} name='good' />
      <Content label={neutral} name='neutral' />
      <Content label={bad} name='bad' />
      <Content label={good+neutral+bad} name='all' />
      <Content label={(good-bad)/(good+neutral+bad)} name='average' />
      <Content label={good/(good+neutral+bad)*100+"%"} name='positive' />
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>{props.name}</button>
)
const Content = (props) => (
  <div>{props.name} {props.label}</div>
)

export default App