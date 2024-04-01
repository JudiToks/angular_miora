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
  pages: number[] = [];
  currentPage: number = 0;
  nouvelEmp: Emp = {} as Emp; 
  empSelectionne: Emp = {} as Emp; 

  constructor(private empService: EmpService) { }

  ngOnInit(): void {
    this.getEmp(this.currentPage);
  }

  getEmp(pageNumber: number): void {
    let totalPages: number = 0;
    this.pages = []
    this.empService.getEmp(pageNumber).subscribe(
      (data: any) => {
        this.emp = data.content;
        this.currentPage = data.pageable.pageNumber;
        totalPages = data.totalPages;
      },
      (error) => {
        console.log('Erreur lors de la récupération des emp : ', error);
      }
    );
    for (let i = 0; i < totalPages; i++) {
      this.pages.push(i);
    }
  }

  insertEmp(): void {
    this.empService.insertEmp(this.nouvelEmp).subscribe({
      next : (value) =>{
            this.getEmp(0)
        },
        error : (err) =>{
          console.log('err',err);
        }}
    );
  }

  updateEmp(): void {
    this.empService.updateEmp(this.empSelectionne).subscribe({
      next : (value) =>{
            this.getEmp(0)
        },
        error : (err) =>{
          console.log('err',err);
        }}
    );
  }

  deleteEmp(id: number): void {
    this.empService.deleteEmp(id).subscribe({
     next : (value) =>{
            this.getEmp(0)
        },
        error : (err) =>{
          console.log('err',err);
        }}
    );
  }
}
