import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../common/task';
import { Observable } from 'rxjs';
import { User } from '../common/user';
import { Role } from '../common/Role';
import { UserTasks } from '../common/usertasks';
import { TaskStatus } from '../common/taskstatus';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private jwtHelper = new JwtHelperService();
  private token = localStorage.getItem('currentUser');
  private tempPerson = this.jwtHelper.decodeToken(this.token);


  // BASE_URL
  Url = 'http://localhost:9091/';


  // USER_TASK
  taskUrl = this.Url + 'allTasks';
  userTask = this.Url + 'userTasks/';

  // TASK_STATUS
  taskStatusUrl = this.Url + 'taskStatus' ;


  // USER_TASK_URL
  userTaskUrl = 'http://localhost:9091/userTasks/task';


  // USER_URL
  userIdUrlMain = 'http://localhost:9091/member/';
  userIdUrl = 'http://localhost:9091/userTasks/user';
  userUrl = 'http://localhost:9091/member/allUsers';


  // ROLE_URL
  roleUrl = 'http://localhost:9091/role';


  // LOGIN_URL
  logIn = 'http://localhost:9091/login';


  // REGISTRATION_URL
  registerUrl = 'http://localhost:9091/register';

  // SEARCH_BY_EMAIL_URL
  emailIdUrl = this.Url + 'member/email/';




  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient;
  }


  // TaskStatus
  getTaskStatus(): Observable<any>{ return this.httpClient.get<TaskStatus[]>(this.taskStatusUrl); }


  // User
  getAllUser(): Observable<any> { return this.httpClient.get<User[]>(this.userUrl); }
  getUserId(id: number): Observable<any>{ return this.httpClient.get<any>(this.userIdUrlMain  + id); }



  // saveMember(user: User): Observable<any> { return this.httpClient.post<User>(this.userUrl, user); }
  // editUser(user: User): Observable<any> { return this.httpClient.put<User>( this.userUrl + 'update', user); }

  // Task
  getAllTasks(): Observable<any>{ return this.httpClient.get<Task[]>(this.taskUrl); }
  getUserIdTasks(id: number): Observable<any>{ return this.httpClient.get<UserTasks[]>(this.userIdUrl + '/' + id); }
  createTask(task: any): Observable<any>{ return this.httpClient.post(this.taskUrl, task); }

  // UserTask
  updateTask(user: UserTasks): Observable<any>{return this.httpClient.put(this.userTask + 'task', user ); }
  getTaskDetails(id: number): Observable<any>{ return this.httpClient.get<UserTasks>(this.userTaskUrl + '/' + id); }

  // RoleId
  getRole(): Observable<any> { return this.httpClient.get<Role>(this.roleUrl); }

  // Login
  logInTask(user: any): Observable<any> {
    const header = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
    return this.httpClient.post<User>(this.logIn, user, {headers: header}); }



  registerUser(user: any): Observable<any> {
    const header = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
    return this.httpClient.post<any>(this.registerUrl, user, {headers : header});
  }
  
  searchEmailId(email: string): Observable<any> {
    return this.httpClient.get<any>(this.emailIdUrl + email);
  }
  logOut() {

    return localStorage.removeItem('isAdmin'), localStorage.removeItem('currentUser');
  }
  // isLoggedIn() {
  //  console.log(this.jwtHelper.isTokenExpired);
  // }
}