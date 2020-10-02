import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/common/user';
import { Role } from 'src/app/common/Role';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.css']
})
export class CreateMemberComponent implements OnInit {
  loginStatus: string;


  constructor(private taskService: TasksService ) { }

  public user: User = new User();
  // tslint:disable-next-line:new-parens
  role: Role;
  // defaultRole: Role = {id: 1, rolename: 'ADMIN'};


  ngOnInit(): void {
    this.taskService.getRole().subscribe(data => {this.role = data; } );
  }

  registration(user: User, userForm: any)  {
    this.taskService.registerUser(user).subscribe((data) => {
                                                              if (data) {
                                                              this.loginStatus = 'User Successfully Created';
                                                              userForm.reset();
      }

    }
    );

}
}
