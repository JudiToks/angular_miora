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

  
  getEmp(): Observable<Emp[]> {
    return this.http.get<Emp[]>(this.apiUrl);
  }

 
  insertEmp(emp: Emp): Observable<void> {
    this.http.post<Emp>(this.apiUrl, emp);
    return new Observable<void>();
  }

 
  updateEmp(emp: Emp): Observable<void> {
    //const url = `${this.apiUrl}/${ emp.id}`;
    this.http.put<Emp>(this.apiUrl,  emp);
    return new Observable<void>();
  }

  
  deleteEmp(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    this.http.delete<void>(url);
    return new Observable<void>();
  }
}
