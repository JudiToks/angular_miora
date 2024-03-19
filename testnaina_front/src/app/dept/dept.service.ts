import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dept } from './dept.model';

@Injectable({
  providedIn: 'root'
})
export class DeptService {

  private apiUrl = 'http://localhost:8080/dept';

  constructor(private http: HttpClient) { }

  
  getDept(): Observable<Dept[]> {
    return this.http.get<Dept[]>(this.apiUrl);
  }

 
  insertDept(dept: Dept): Observable<void> {
    this.http.post<Dept>(this.apiUrl, dept);
    return new Observable<void>();
  }

 
  updateDept(dept: Dept): Observable<void> {
    //const url = `${this.apiUrl}/${ dept.id}`;
    this.http.put<Dept>(this.apiUrl,  dept);
    return new Observable<void>();
  }

  
  deleteDept(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    this.http.delete<void>(url);
    return new Observable<void>();
  }
}
