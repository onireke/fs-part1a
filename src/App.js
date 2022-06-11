import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";


function App() {

  const course = 'Half Stack application development'
   const parts = [
     { 
     name:'Fundamentals of React',
     exercises1 : 10
    },
    {
    name :'Using props to pass data',
    exercises2 : 7

  },
{
    name :'State of a component',
    exercises3 : 14
  }  
]
  
  
  return (
    <div className="App">

      <Header  course={course} />
      <Content part1={parts[0].name} exercise1={parts[0].exercises1} part2={parts[1].name} exercise2={parts[1].exercises2} part3={parts[2].name} exercise3={parts[2].exercises3} />
      <Total total={parts[0].exercises1+ parts[1].exercises2+ parts[2].exercises3}/>
    </div>
  );
}

export default App
