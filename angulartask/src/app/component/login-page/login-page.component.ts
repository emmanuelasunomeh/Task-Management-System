import { Component, OnInit } from '@angular/core';
import {TasksService} from 'src/app/services/tasks.service';
import {Router} from '@angular/router';
import {User} from 'src/app/common/user';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public user: any = {};
  profileId: any;
  loginErrorMessage: string;
  loginStatus: boolean;
  loginMessage: string;
  tokenMessage: string;

  constructor(private taskService: TasksService, private router: Router, private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  loginUser( user: any) {
    this.taskService.logInTask(user).subscribe((data) => {
      if (data) {
        if (data.token) {
          localStorage.setItem('isAdmin', JSON.stringify(data.user.role.rolename));
          localStorage.setItem('currentUser', JSON.stringify(data.token));
          if (data.user.role.rolename === 'ADMIN') {
            this.router.navigate(['dashboard']);
            this.profileId = data.user.id;
          }else if (data.user.role.rolename === 'MODERATOR') {
            this.router.navigate(['dashboard/user/' + data.user.id]);
            this.profileId = data.user.id;

          }else if (data.user.role.rolename === 'USER') {
            this.router.navigate(['dashboard/user/' + data.user.id]);
            this.profileId = data.user.id;

          }else {
            this.router.navigate(['login']);
            this.loginErrorMessage = 'No Role Assigned to this User!!';
            this.loginStatus = false;
          }}}},
          (err) => {console.log('Error :' + err);
                    this.dangerMessage('Your Email/Password Detail(s) is Incorrect'); }
                    ); }

    dangerMessage(message) {
      this.notificationService.showError(message, '');
    }
  }
