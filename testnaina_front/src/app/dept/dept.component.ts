import { Component, OnInit } from '@angular/core';
import { Dept } from './dept.model'; 
import { DeptService } from './dept.service';

@Component({
  selector: 'app-dept',
  templateUrl: './dept.html',
  styleUrls: []
})
export class DeptComponent implements OnInit {

  dept: Dept[] = [];
  pages: number[] = [];
  currentPage: number = 0;
  nouvelDept: Dept = {} as Dept; 
  deptSelectionne: Dept = {} as Dept; 

  constructor(private deptService: DeptService) { }

  ngOnInit(): void {
    this.getDept(this.currentPage);
  }

  getDept(pageNumber: number): void {
    let totalPages: number = 0;
    this.pages = []
    this.deptService.getDept(pageNumber).subscribe(
      (data: any) => {
        this.dept = data.content;
        this.currentPage = data.pageable.pageNumber;
        totalPages = data.totalPages;
      },
      (error) => {
        console.log('Erreur lors de la récupération des dept : ', error);
      }
    );
    for (let i = 0; i < totalPages; i++) {
      this.pages.push(i);
    }
  }

  insertDept(): void {
    this.deptService.insertDept(this.nouvelDept).subscribe({
      next : (value) =>{
            this.getDept(0)
        },
        error : (err) =>{
          console.log('err',err);
        }}
    );
  }

  updateDept(): void {
    this.deptService.updateDept(this.deptSelectionne).subscribe({
      next : (value) =>{
            this.getDept(0)
        },
        error : (err) =>{
          console.log('err',err);
        }}
    );
  }

  deleteDept(id: number): void {
    this.deptService.deleteDept(id).subscribe({
     next : (value) =>{
            this.getDept(0)
        },
        error : (err) =>{
          console.log('err',err);
        }}
    );
  }
}
