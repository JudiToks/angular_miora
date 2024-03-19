import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { NgModel } from '@angular/forms';
@NgModule({
  declarations: [
  
  ],
  imports: [
    NgFor,
    NgModel,
    HttpClientModule,
    RouterModule.forRoot(routes) 
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
