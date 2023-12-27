const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const partsExercises = [[part1,exercises1],[part2,exercises2],[part3,exercises3]]
  const exercises = [exercises1,exercises2,exercises3]

  return (
    <div>
      <Header course={course} />
      <Content partsExercises={partsExercises} />
      <Total exercises={exercises}/>
    </div>
  )
}

const Header = (progs) => {
  return (
    <div>
      <h1>{progs.course}</h1>
    </div>
  )
}

const Content = (progs) => {
  return (
    <div>
      <Part part={progs.partsExercises[0][0]} exercises={progs.partsExercises[0][1]}/>
      <Part part={progs.partsExercises[1][0]} exercises={progs.partsExercises[1][1]}/>
      <Part part={progs.partsExercises[2][0]} exercises={progs.partsExercises[2][1]}/>
    </div>
  )
}

const Part = (progs) => {
  return (
    <div>
      <p>
        {progs.part} {progs.exercises}
      </p>
    </div>
  )
}

const Total = (progs) => {
  const totalExercises = progs.exercises.reduce((a,b)=>a+b,0,0)
  return (
    <div>
      <p>Number of exercises {totalExercises}</p>
    </div>
  )
}

export default App