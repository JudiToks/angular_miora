import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmpComponent } from './emp/emp.component'; 
import { EmpDeptComponent } from './empDept/empDept.component'; 
import { DeptComponent } from './dept/dept.component'; 

@NgModule({
  declarations: [
    EmpComponent , 
 	EmpDeptComponent , 
 	DeptComponent , 
 	
  ],
  imports: [
    NgFor,
    NgIf,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes) 
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
