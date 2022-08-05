import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEmployeeComponent } from './employee/view-employee.component';
import { AddEmployeeComponent } from './employee/add-employee.component';
import { SingleEmployeeComponent } from './employee/single-employee.component';
import { UpdateEmployeeComponent } from './employee/update-employee.component';
import { DeleteEmployeeComponent } from './employee/delete-employee.component';

const routes: Routes = [
  {path: 'employees', component: ViewEmployeeComponent},
  {path: 'add', component: AddEmployeeComponent},
  {path: 'employee_detail/:id', component: SingleEmployeeComponent},
  {path: 'update/:id', component: UpdateEmployeeComponent},
  {path: 'delete/:id', component: DeleteEmployeeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
