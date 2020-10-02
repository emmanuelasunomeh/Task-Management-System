import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { UserTasks } from 'src/app/common/usertasks';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/common/task';

@Component({
  selector: 'app-view-member-tasks',
  templateUrl: './view-member-tasks.component.html',
  styleUrls: ['./view-member-tasks.component.css']
})
export class ViewMemberTasksComponent implements OnInit {

  userId: number;
  userIdTask: UserTasks[];
  IsAdmin: boolean;

  constructor(private taskService: TasksService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const isAdmin = localStorage.getItem('isAdmin').toString();
    this.IsAdmin = isAdmin.toString()[1] === 'ADMIN'.toString()[0];

    this.userId = +this.activatedRoute.snapshot.paramMap.get('id');
    this.taskService.getUserIdTasks(this.userId).subscribe(
      data => {this.userIdTask = data; } );
  }

}
