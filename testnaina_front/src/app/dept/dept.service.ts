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
  
  getDept(id:number): Observable<Dept[]> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Dept[]>(url);
  } 
  insertDept(dept: Dept) {
     return this.http.post<Dept>(this.apiUrl, dept);
  }
 
  updateDept(dept: Dept) {
    //const url = `${this.apiUrl}/${ dept.id}`;
    return this.http.put<Dept>(this.apiUrl,  dept);
  }

  deleteDept(id: number) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
