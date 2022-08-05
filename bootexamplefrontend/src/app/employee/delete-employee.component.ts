import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './EmployeeService';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit 
{

  id!:number;
  constructor(private _employeeService: EmployeeService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];

    this._employeeService.deleteEmployee(this.id).subscribe(data => {
      this._router.navigate(['/employees']);
    }, error => console.log(error));
  }

}
