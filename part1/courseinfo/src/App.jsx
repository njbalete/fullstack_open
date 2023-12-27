const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
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
      <Part part={progs.parts[0].name} exercises={progs.parts[0].exercises}/>
      <Part part={progs.parts[1].name} exercises={progs.parts[1].exercises}/>
      <Part part={progs.parts[2].name} exercises={progs.parts[2].exercises}/>
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
  return (
    <div>
      <p>Number of exercises {progs.parts[0].exercises + progs.parts[1].exercises + progs.parts[2].exercises}</p>
    </div>
  )
}

export default App