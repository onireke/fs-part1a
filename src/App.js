import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";


function App() {

  const course = 'Half Stack application development'
   const part1 = { 
     name:'Fundamentals of React',
     exercises1 : 10
    }

  const part2 = {
    name :'Using props to pass data',
    exercises2 : 7

  }


  const part3 = {
    name :'State of a component',
    exercises3 : 14
  }  
  
  
  return (
    <div className="App">

      <Header  course={course} />
      <Content part1={part1.name} exercise1={part1.exercises1} part2={part2.name} exercise2={part2.exercises2} part3={part3.name} exercise3={part3.exercises3} />
      <Total total={part1.exercises1+ part2.exercises2+ part3.exercises3}/>
    </div>
  );
}

export default App
