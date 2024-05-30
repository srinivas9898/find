import React, { useState } from 'react'

function EmployeeForm() {

    let [employees,setEmployees] = useState([]);

    let getEmploeesFormServer = async ()=>{

        let reqOptions = {
            method:"GET"
        }
        let JSONData = await fetch("http://localhost:4567/employees",reqOptions);

        let JSOData = await JSONData.json();
        setEmployees(JSOData);
        console.log(JSOData);
    }
  return (
    <div>
    <form>
        <div>
            <button rype="button" 
            onClick={()=>{
                getEmploeesFormServer();
            }}>Get Employees</button>
        </div>
    </form>
    <table>
        <thead>
            <tr>
                <th>S.No.</th>
                <th>id</th>
                <th>Profile Pic</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Department</th>
                <th>Country</th>
                <th>Salary</th>
            </tr>
        </thead>
        <tbody>
            {employees.map((ele,i)=>{
                return (
                <tr key={i}>
                <td>{i+1}</td>
                <td>{ele.id}</td>
                <td><img src={ele.profilepic}></img></td>
                <td>{ele.firstName}</td>
                <td>{ele.lastName}</td>
                <td>{ele.email}</td>
                <td>{ele.gender}</td>
                <td>{ele.age}</td>
                <td>{ele.department}</td>
                <td>{ele.country}</td>
                <td>₹.{ele.salary}</td>
            </tr>
                );
            })}
            </tbody>
            
    </table>
    </div>
  )
}

export default EmployeeForm