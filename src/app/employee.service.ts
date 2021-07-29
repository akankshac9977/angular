import { Injectable } from '@angular/core';
import { Employee } from 'Models/Employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService 
{
  //Creating a list of Employees.
  employeeList:Employee[]=
  [
    {
      id:1,
      name:"Dwight",
      salary:20000,
      permanent:true,
      department:{id:1,name:"PayRoll"},
      skill:[{id:1,name:"HTML"},{id:2,name:"CSS"},{id:3,name:"JavaScript"}],
      dateOfBirth:new Date("1999-05-02"),
      photoURL:"assets/Images/dwight.jpg"
    },
    {
      id:2,
      name:"Jim",
      salary:30000,
      permanent:true,
      department:{id:2,name:"Internal"},
      skill:[{id:1,name:"PHP"},{id:2,name:"MYSQL"},{id:3,name:"React"}],
      dateOfBirth:new Date("2000-12-01"),
      photoURL:"assets/Images/jim.jpg"
    },
    {
      id:3,
      name:"Pam",
      salary:40000,
      permanent:false,
      department:{id:3,name:"HR"},
      skill:[{id:1,name:"JAVA"},{id:2,name:"SpringBoot"},{id:3,name:"Angular"}],
      dateOfBirth:new Date("1991-04-30"),
      photoURL:"assets/Images/pamm.jpg"
    },
    {
      id:4,
      name:"Miachael",
      salary:50000,
      permanent:true,
      department:{id:2,name:"Internal"},
      skill:[{id:1,name:"C#"},{id:2,name:"ASP.NET MVC"},{id:3,name:"VUE"}],
      dateOfBirth:new Date("1999-07-03"),
      photoURL:"assets/Images/michael.jpg"
    },
    {
      id:5,
      name:"Ryan",
      salary:60000,
      permanent:false,
      department:{id:2,name:"Internal"},
      skill:[{id:1,name:"Go"},{id:2,name:"ASP.NET CORE"},{id:3,name:"Python"}],
      dateOfBirth:new Date("1997-02-02"),
      photoURL:"assets/Images/ryan.jpg"
    }
  ];

  constructor() { }
  
  //Creating an empty employee object.
  empty_emp:any={};

  //Get all employees.
  getAllEmployees():Employee[]
  {
    return this.employeeList;
  }

  //Get employee by id.
  getEmployee(employeeId:number):Employee
  {
    

    this.employeeList.forEach(item => {
      if(item.id==employeeId)
      this.empty_emp=item;  
    });

    return this.empty_emp;
  }

}
