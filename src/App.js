import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";


function App() {

  const course = {
    name :'Half Stack application development',
   parts :[
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
  }

  
  
  return (
    <div className="App">

      <Header  course={course.name} />
      <Content part1={course.parts[0].name} exercise1={course.parts[0].exercises1} part2={course.parts[1].name} exercise2={course.parts[1].exercises2} part3={course.parts[2].name} exercise3={course.parts[2].exercises3} />
      <Total total={course.parts[0].exercises1+ course.parts[1].exercises2+ course.parts[2].exercises3}/>
    </div>
  );
}

export default App
