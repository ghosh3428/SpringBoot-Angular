import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from './Employee';
import { EmployeeService } from './EmployeeService';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit 
{
  employees!: Employee[] ;

  constructor(private _employeeService: EmployeeService, private _router : Router) { }

  ngOnInit(): void 
  {
    this.getEmployees();
  }

  private getEmployees(){
    this._employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

  employeeDetails(id: number){
    this._router.navigate(['employee_detail', id]);
  }

  updateEmployee(id: number){
    this._router.navigate(['update', id]);
  }

  deleteEmployee(id: number){
    this._router.navigate(['delete', id]);
  }

}
