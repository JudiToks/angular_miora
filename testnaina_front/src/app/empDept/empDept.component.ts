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
  pages: number[] = [];
  currentPage: number = 0;
  nouvelEmpDept: EmpDept = {} as EmpDept; 
  empDeptSelectionne: EmpDept = {} as EmpDept; 

  constructor(private empDeptService: EmpDeptService) { }

  ngOnInit(): void {
    this.getEmpDept(this.currentPage);
  }

  getEmpDept(pageNumber: number): void {
    let totalPages: number = 0;
    this.pages = []
    this.empDeptService.getEmpDept(pageNumber).subscribe(
      (data: any) => {
        this.empDept = data.content;
        this.currentPage = data.pageable.pageNumber;
        totalPages = data.totalPages;
      },
      (error) => {
        console.log('Erreur lors de la récupération des empDept : ', error);
      }
    );
    for (let i = 0; i < totalPages; i++) {
      this.pages.push(i);
    }
  }

  insertEmpDept(): void {
    this.empDeptService.insertEmpDept(this.nouvelEmpDept).subscribe({
      next : (value) =>{
            this.getEmpDept(0)
        },
        error : (err) =>{
          console.log('err',err);
        }}
    );
  }

  updateEmpDept(): void {
    this.empDeptService.updateEmpDept(this.empDeptSelectionne).subscribe({
      next : (value) =>{
            this.getEmpDept(0)
        },
        error : (err) =>{
          console.log('err',err);
        }}
    );
  }

  deleteEmpDept(id: number): void {
    this.empDeptService.deleteEmpDept(id).subscribe({
     next : (value) =>{
            this.getEmpDept(0)
        },
        error : (err) =>{
          console.log('err',err);
        }}
    );
  }
}
