import Header from "./Header.jsx";
import Content from "./Content.jsx";
import Total from "./Total.jsx";
import  "./style.css";
const course = {
  name: "Half Stack application development",
  parts: [
    { id: 1, name: "Fundamentals of React", exercises: 10 },
    { id: 2, name: "Using props to pass data", exercises: 7 },
    { id: 3, name: "State of a component", exercises: 14 }
  ]
};

export default function App() {
  return (
    <div className="container">
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}
