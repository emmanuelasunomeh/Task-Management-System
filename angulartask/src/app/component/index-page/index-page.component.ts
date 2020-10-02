import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TasksService } from 'src/app/services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent implements OnInit {

  status: boolean;
  tempPerson: any;
  user: any;

  constructor(private taskService: TasksService, private router: Router) { }

  jwtHelper = new JwtHelperService();
  ngOnInit(): void {
    const token = localStorage.getItem('currentUser');
    this.status = false;
    if (token){
      this.tempPerson = this.jwtHelper.decodeToken(token);
      this.status = true;
      if (this.tempPerson.sub) {
        this.taskService.searchEmailId(this.tempPerson.sub).subscribe(data => { this.user = data; } );
      }
    }
  }

  logOut() {
      this.taskService.logOut();
      this.router.navigate(['login']);
    }

}
