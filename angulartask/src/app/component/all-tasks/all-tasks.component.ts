import { Component, OnInit } from '@angular/core';
import { Task } from '../../common/task';
import { TasksService } from 'src/app/services/tasks.service';
import { ActivatedRoute, Router,  } from '@angular/router';


@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements OnInit {

  tasks: Task[];

  selectedId: number;
  constructor(private taskService: TasksService, private activatedRoute: ActivatedRoute ) {}

  ngOnInit(): void {

    
    
    this.selectedId = +this.activatedRoute.snapshot.paramMap.get('id');
    this.taskService.getAllTasks().subscribe(data => {this.tasks = data; });

  }

  // isLoggedIn() {
   // this.taskService.isLoggedIn();
  // }
}
