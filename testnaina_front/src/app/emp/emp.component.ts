import { Component, OnInit } from '@angular/core';
import { Emp } from './emp.model'; 
import { EmpService } from './emp.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.html',
  styleUrls: []
})
export class EmpComponent implements OnInit {

  emp: Emp[] = [];
  nouvelEmp: Emp = {} as Emp; 
  empSelectionne: Emp = {} as Emp; 

  constructor(private empService: EmpService) { }

  ngOnInit(): void {
    this.getEmp();
  }

  getEmp(): void {
    this.empService.getEmp().subscribe(
      (data: Emp[]) => {
        this.emp = data;
      },
      (error) => {
        console.log('Erreur lors de la récupération des emp : ', error);
      }
    );
  }

  insertEmp(): void {
    this.empService.insertEmp(this.nouvelEmp).subscribe({
      next : (value) =>{
            this.getEmp()

        },
        error : (err) =>{
          console.log('err',err);
        }}
    );
  }

  updateEmp(): void {
    this.empService.updateEmp(this.empSelectionne).subscribe({
      next : (value) =>{
            this.getEmp()
        },
        error : (err) =>{
          console.log('err',err);
        }}
    );
  }

  deleteEmp(id: number): void {
    this.empService.deleteEmp(id).subscribe({
     next : (value) =>{
            this.getEmp()

        },
        error : (err) =>{
          console.log('err',err);
        }}
    );
  }
}
