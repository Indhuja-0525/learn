function Student(props) {
  return (
    <div>
      <h2>Student Details</h2>

      <h3>Name: {props.name}</h3>
      <h3>Department: {props.department}</h3>
      <h3>Age: {props.age}</h3>
    </div>
  );
}

export default Student;