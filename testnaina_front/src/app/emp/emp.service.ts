import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Emp } from './emp.model';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  private apiUrl = 'http://localhost:8080/emp';

  constructor(private http: HttpClient) { }
  
  getEmp(id:number): Observable<Emp[]> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Emp[]>(url);
  } 
  insertEmp(emp: Emp) {
     return this.http.post<Emp>(this.apiUrl, emp);
  }
 
  updateEmp(emp: Emp) {
    //const url = `${this.apiUrl}/${ emp.id}`;
    return this.http.put<Emp>(this.apiUrl,  emp);
  }

  deleteEmp(id: number) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
