import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from './Employee';
import { EmployeeService } from './EmployeeService';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit 
{

  employee: Employee = new Employee();
  id!:number;
  constructor(private _employeeService: EmployeeService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void 
  {
    this.id = this._route.snapshot.params['id'];

    this._employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }


  onSubmit()
  {
    this._employeeService.updateEmployee(this.id, this.employee).subscribe( data =>{
      this._router.navigate(['/employees']);
    }
    , error => console.log(error));
   
  }

}
