import "./App.css";
import { Content } from "./Content";

import Header from "./Header";
import Parrafo from "./Parrafo";
import { Total } from "./Total";
// extrar una propiedad de un objeto
// const course  = props.course
// es lo mismo que hacer esto
// const { course } = props

//esta funcion de vuelve lo primero que esta evaluando
//const Herader = ({ course }) => <h1>{course}</h1>;

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  );
};

export default App;
