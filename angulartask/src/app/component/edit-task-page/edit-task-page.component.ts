import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { User } from 'src/app/common/user';
import { UserTasks } from 'src/app/common/usertasks';
import { ActivatedRoute } from '@angular/router';
import { TaskStatus } from 'src/app/common/taskstatus';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-edit-task-page',
  templateUrl: './edit-task-page.component.html',
  styleUrls: ['./edit-task-page.component.css']
})
export class EditTaskPageComponent implements OnInit {

  id: number;
  userId: User = new User();
  // tslint:disable-next-line:new-parens
  userTask: UserTasks = new UserTasks;
  ts: TaskStatus;
  users: User[];

  constructor(private taskService: TasksService,
              private activatedRoute: ActivatedRoute,
              private notifyService: NotificationService) { }

  ngOnInit(): void {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    // this.taskService.put
    this.taskService.getTaskDetails(this.id).subscribe(task => {this.userTask = task; } );

    this.taskService.getTaskStatus().subscribe(data => {this.ts = data; } );
    this.getUserId();
    this.getUsers();

  }

  getUserId() {
    this.taskService.getUserId(this.id).subscribe(member => {this.userId = member; } );
  }
  getUsers(): void {
    this.taskService.getAllUser().subscribe(data => {this.users = data; } );
  }

  updateTask(user) {
    this.taskService.updateTask(user).subscribe(data => {if (data) {
      this.showToasterSuccess('Update Successfully'); }
       });
  }

  showToasterSuccess(x){
    if (x) {
    this.notifyService.showSuccess(x, ' ');
    }
}

}




 // ngOnInit() {
  //  this.id = +this.activatedRoute.snapshot.paramMap.get('id');
   // this.taskService.getTaskDetails(this.id).
   //                             subscribe(detail => {this.userTask = detail; } );
   // this.getUser();

  // }
