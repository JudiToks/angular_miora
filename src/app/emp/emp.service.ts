import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Emp } from './emp.model';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  private apiUrl = 'localhost:8080/emp';

  constructor(private http: HttpClient) { }

  
  getEmp(): Observable<Emp[]> {
    return this.http.get<Emp[]>(this.apiUrl);
  }

 
  insertEmp(emp: Emp): Observable<void> {
    return this.http.post<void>(this.apiUrl, emp);
  }
  
  updateEmp(emp: Emp): Observable<void> {
    return this.http.put<void>(this.apiUrl, emp);
  }
  
  deleteEmp(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
  
}
