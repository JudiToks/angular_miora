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
  nouvelDept: Dept = {} as Dept; 
  deptSelectionne: Dept = {} as Dept; 

  constructor(private deptService: DeptService) { }

  ngOnInit(): void {
    this.getDept();
  }

  getDept(): void {
    this.deptService.getDept().subscribe(
      (data: Dept[]) => {
        this.dept = data;
      },
      (error) => {
        console.log('Erreur lors de la récupération des dept : ', error);
      }
    );
  }

  insertDept(): void {
    this.deptService.insertDept(this.nouvelDept).subscribe({
      next : (value) =>{
            this.getDept()

        },
        error : (err) =>{
          console.log('err',err);
        }}
    );
  }

  updateDept(): void {
    this.deptService.updateDept(this.deptSelectionne).subscribe({
      next : (value) =>{
            this.getDept()
        },
        error : (err) =>{
          console.log('err',err);
        }}
    );
  }

  deleteDept(id: number): void {
    this.deptService.deleteDept(id).subscribe({
     next : (value) =>{
            this.getDept()

        },
        error : (err) =>{
          console.log('err',err);
        }}
    );
  }
}
