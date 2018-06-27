import React, { Component } from 'react';
import EmployeeForm from '../EmployeeForm/EmployeeForm';
import EmployeeList from '../EmployeeList/EmployeeList';
import EmployeeTotal from '../EmployeeTotal/EmployeeTotal';
import { connect } from 'react-redux';

const mapRedux = (reduxState) =>({
  reduxState
})
class App extends Component {
  constructor() {
    super();


    //this is the old way to bind..use a =>
    this.addEmployee = this.addEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  addEmployee(newEmployee) {
    //dispatch Employee
 
    const action = {type: 'ADD_EMPLOYEE', payload: newEmployee}
    this.props.dispatch(action);
  }

  deleteEmployee(employeeToDelete) {
    //not sure what this is doing? but it deleted the Employee
 
    const action = {type: 'DELETE_EMPLOYEE', payload: employeeToDelete};
    this.props.dispatch(action);
  }

  render() {
    return (
      
      <div>
        <EmployeeForm addEmployee={this.addEmployee} />
        <EmployeeList employeeList={this.props.reduxState.employeeList} deleteEmployee={this.deleteEmployee} />
        <EmployeeTotal employeeList={this.props.reduxState.employeeList} />
      </div>
    );
  }
}

export default connect(mapRedux)(App); //<<<< this shit be Currying YO'
