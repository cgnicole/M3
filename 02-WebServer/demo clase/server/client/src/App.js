import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/students")
      .then((reponse) => reponse.json())
      .then((data) => setStudents(data));
  }, []);

  console.log(students);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de estudiantes </h1>
        {students.length &&
          students.map((stud) => {
            return (
              <div key={stud.id}>
                <h3>
                  {stud.id}: {stud.name}
                </h3>
                <h3>💖</h3>
              </div>
            );
          })}
      </header>
    </div>
  );
}

export default App;
