import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';
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
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
