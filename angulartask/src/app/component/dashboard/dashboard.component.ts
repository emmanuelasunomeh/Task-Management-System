import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public tempPerson: any;
  user: any;
  person: any;

  constructor(private taskService: TasksService, private router: Router, private route: ActivatedRoute) { }

  jwtHelper = new JwtHelperService();
  ngOnInit(): void {
    const token = localStorage.getItem('currentUser');
    this.tempPerson = this.jwtHelper.decodeToken(token);
    
    if (this.tempPerson.sub) {
       this.taskService.searchEmailId(this.tempPerson.sub).subscribe(data => this.user = data );
    }
  }

  logOut() {
    this.taskService.logOut();

  }



}
