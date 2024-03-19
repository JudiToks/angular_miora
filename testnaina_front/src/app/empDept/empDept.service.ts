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

 
  insertEmpDept(empDept: EmpDept): Observable<void> {
    this.http.post<EmpDept>(this.apiUrl, empDept);
    return new Observable<void>();
  }

 
  updateEmpDept(empDept: EmpDept): Observable<void> {
    //const url = `${this.apiUrl}/${ empDept.id}`;
    this.http.put<EmpDept>(this.apiUrl,  empDept);
    return new Observable<void>();
  }

  
  deleteEmpDept(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    this.http.delete<void>(url);
    return new Observable<void>();
  }
}
