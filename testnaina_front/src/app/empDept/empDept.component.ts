import { Component, OnInit } from '@angular/core';
import { EmpDept } from './empDept.model'; 
import { EmpDeptService } from './empDept.service';

@Component({
  selector: 'app-empDept',
  templateUrl: './empDept.html',
  styleUrls: []
})
export class EmpDeptComponent implements OnInit {

  empDept: EmpDept[] = [];
  nouvelEmpDept: EmpDept = {} as EmpDept; 
  empDeptSelectionne: EmpDept = {} as EmpDept; 

  constructor(private empDeptService: EmpDeptService) { }

  ngOnInit(): void {
    this.getEmpDept();
  }

  getEmpDept(): void {
    this.empDeptService.getEmpDept().subscribe(
      (data: EmpDept[]) => {
        this.empDept = data;
      },
      (error) => {
        console.log('Erreur lors de la récupération des empDept : ', error);
      }
    );
  }

  insertEmpDept(): void {
    this.empDeptService.insertEmpDept(this.nouvelEmpDept).subscribe({
      next : (value) =>{
            this.getEmpDept()

        },
        error : (err) =>{
          console.log('err',err);
        }}
    );
  }

  updateEmpDept(): void {
    this.empDeptService.updateEmpDept(this.empDeptSelectionne).subscribe({
      next : (value) =>{
            this.getEmpDept()
        },
        error : (err) =>{
          console.log('err',err);
        }}
    );
  }

  deleteEmpDept(id: number): void {
    this.empDeptService.deleteEmpDept(id).subscribe({
     next : (value) =>{
            this.getEmpDept()

        },
        error : (err) =>{
          console.log('err',err);
        }}
    );
  }
}
