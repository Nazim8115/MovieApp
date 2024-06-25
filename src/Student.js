import { Component } from "react";

class Student extends Component {
  render() {
    const { emp } = this.props;
    return (
      <>
        <h1>Hello, {emp.name}</h1>
        <h2>emp ID :{emp.id}</h2>
        <h2>City:{emp.city}</h2>
      </>
    );
  }
}
export default Student;
