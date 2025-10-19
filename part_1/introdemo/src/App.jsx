const Header = (course) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  )
}

const Content = (props) => {
  return (
    <>
    <Part name={props.name1} exercises={props.exercise1} />
    <Part name={props.name2} exercises={props.exercise2} />
    <Part name={props.name3} exercises={props.exercise3} />
    </>
  )
}

const Total = (total) => {
  return (
    <p>
      The number of Total exercises {total.number}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header name={course} />
      <Content name1={part1} exercise1={exercises1} 
               name2={part2} exercise2={exercises2}
               name3={part3} exercise3={exercises3}
      />

      <Total number={exercises1+ exercises2 + exercises3} />
    </>
  )
}

export default App