import Part from "./Part";



function Content(props
    ) {
     
 return(
     <div>

         <Part part={props.part1} excercise={props.exercise1}/>
         <Part part={props.part2} excercise={props.exercise2}/>
         <Part part={props.part3} excercise={props.exercise3}/>
         

     </div>
    );
}

export default Content