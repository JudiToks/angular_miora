import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmpDept } from './empDept.model';

@Injectable({
  providedIn: 'root'
})
export class EmpDeptService {

  private apiUrl = 'http://localhost:8080/empDept';

  constructor(private http: HttpClient) { }

  
  getEmpDept(): Observable<EmpDept[]> {
    return this.http.get<EmpDept[]>(this.apiUrl);
  }

 
  insertEmpDept(empDept: EmpDept) {
     return this.http.post<EmpDept>(this.apiUrl, empDept);
  }

 
  updateEmpDept(empDept: EmpDept) {
    //const url = `${this.apiUrl}/${ empDept.id}`;
    return this.http.put<EmpDept>(this.apiUrl,  empDept);
  }

  
  deleteEmpDept(id: number) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
