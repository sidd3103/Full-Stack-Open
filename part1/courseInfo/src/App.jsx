const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

const Part = ({ name, ex }) => {
  return (
    <p>
      {name} {ex}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((o) => (
        <Part key={parts.indexOf(o)} name={o.name} ex={o.exercises} />
      ))}
    </>
  );
};

const Total = ({ parts }) => {
  return (
    <p>
      Number of exercises {parts.reduce((acc, cv) => acc + cv.exercises, 0)}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
