import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { User } from 'src/app/common/user';
import { UserTasks } from 'src/app/common/usertasks';
import { Task } from 'src/app/common/task';
import { TaskStatus } from 'src/app/common/taskstatus';
import { NotificationService } from 'src/app/services/notification.service';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  public task: Task = new Task();
  public allUser: User[];
  public userStatus: TaskStatus[];
  taskSuccessMessage: string;

  constructor(private taskService: TasksService, private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.taskService.getAllUser().subscribe(data => {this.allUser = data; } );
    this.taskService.getTaskStatus().subscribe((data) => {this.userStatus = data; });
  }

createTask(task: Task, userForm: any) {
    this.taskService.createTask(task).subscribe((taskData) => {
      if (taskData) {
        this.taskSuccessMessage = 'Create Task Successfully!!';
        this.SuccessMessage(this.taskSuccessMessage);
      }
    });
    userForm.reset(); }

    SuccessMessage(x) {
      this.notificationService.showSuccess(x, ' ');
    }
}
