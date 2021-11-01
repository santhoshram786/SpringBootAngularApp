import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable()
export class UserServiceService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }

  public getEmployeeById(id:number):Observable<User>
  {
    return this.http.get<User>(`${this.usersUrl}/${id}`);
  }

  public updateUser(id:number,user: User) {
    return this.http.put<User>(`${this.usersUrl}/${id}`, user);
  }

  public deleteEmployeeById(id:number):Observable<User>
  {
    return this.http.delete<User>(`${this.usersUrl}/${id}`);
  }


}