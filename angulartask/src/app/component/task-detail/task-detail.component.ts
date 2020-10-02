import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserTasks } from 'src/app/common/usertasks';
import { User } from 'src/app/common/user';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  id: number;
  user: User[];
  userTask: UserTasks[];
  tempPerson: any;
  presentUser: any;

  jwtHelper = new JwtHelperService();

  constructor(private taskService: TasksService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    const token = localStorage.getItem('currentUser').toString();
    this.tempPerson = this.jwtHelper.decodeToken(token);
    if (this.tempPerson.sub) {
      this.taskService.searchEmailId(this.tempPerson.sub).subscribe(data => { this.presentUser = data; } );
    }

    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.taskService.getTaskDetails(this.id).
                                subscribe(detail => {this.userTask = detail; } );
    this.getUser();

  }

  getUser() {
    this.taskService.getAllUser().subscribe(members => {this.user = members; } );
  }

}
