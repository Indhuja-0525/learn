import Student from "./Student";

function App() {
  return (
    <div>
      <h1>Student Dashboard</h1>

      <Student
        name="Indhuja"
        department="Information Technology"
        age={20}
      />

      <Student
        name="Vishnu"
        department="Computer Science"
        age={21}
      />

      <Student
        name="Deva"
        department="Mechanical Engineering"
        age={20}
      />

    </div>
  );
}

export default App;