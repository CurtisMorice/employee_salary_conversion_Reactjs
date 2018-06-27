import React , {Component} from 'react';



class EmployeeList extends Component{
render() {
return(
  <ul>
  {this.props.employeeList.map(employee => (
    <li key={employee.idNumber}>
      {`${employee.firstName}
      ${employee.lastName}
      is the ${employee.jobTitle}
      and makes ${employee.annualSalary}`}
      <button onClick={() => this.props.deleteEmployee(employee)}>
        Delete
      </button>
    </li>
  ))}
</ul>

);
}
}

//                         // This is props ... 
// const EmployeeList = ({ employeeList, deleteEmployee }) => (
  
// );



export default EmployeeList ;
