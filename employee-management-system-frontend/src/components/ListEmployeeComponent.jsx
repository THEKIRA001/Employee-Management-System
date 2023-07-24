import React, { Component } from 'react'

export default class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            employees: []
        }
    }
  render() {
    return (
      <div>
         <h2 className="text-center">Employees List</h2>
         <div className="row">
            <table className="table table-striped table-bordered">
                
                <thead>
                    <tr>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email Id</th>
                        <th>Employee Actions Name</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        this.state.employees.map(
                            employees =>
                            <tr key = {employees.id}>
                                <td>{employees.firstName}</td>
                                <td>{employees.lasttName}</td>
                                <td>{employees.emailId}</td>
                            </tr>
                        )
                    }
                </tbody>

            </table>
         </div>
      </div>
    )
  }
}
