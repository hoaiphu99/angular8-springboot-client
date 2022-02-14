import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:8080/api/v1';
  constructor(private http: HttpClient) {}

  getUser(username: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${username}`);
  }

  createUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/users`, user);
  }

  updateUser(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/users/user/${id}`, value);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/users/user/${id}`);
  }

  getUserList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`);
  }
}