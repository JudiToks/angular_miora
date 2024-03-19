import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import { EmpComponent } from './emp/emp.component'; 
import { EmpDeptComponent } from './empDept/empDept.component'; 
import { DeptComponent } from './dept/dept.component'; 

export const routes: Routes = [
    {path:'',redirectTo : 'emp',pathMatch:'full'},
   {path : 'emp',component : EmpComponent },
 	{path : 'empDept',component : EmpDeptComponent },
 	{path : 'dept',component : DeptComponent },
 	
];
