import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from './Employee';
import { EmployeeService } from './EmployeeService';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  constructor(private _employeeService: EmployeeService,
    private router: Router) 
    {
    this.employee.emailId="";
    this.employee.firstName="";
    this.employee.lastName="";
   }

  ngOnInit(): void 
  {
  }

  onSubmit()
  {
    console.log(this.employee);
    this.saveEmployee();
  }

  saveEmployee(){
    this._employeeService.createEmployee(this.employee).subscribe( data =>{
      console.log(data);
      this.router.navigate(['/employees']);
    },
    error => console.log(error));
  }

}
