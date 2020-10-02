import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import {TasksService } from '../app/services/tasks.service';

import { AllTasksComponent } from './component/all-tasks/all-tasks.component';
import { CreateTaskComponent } from './component/create-task/create-task.component';
import { CreateMemberComponent } from './component/create-member/create-member.component';
import { ViewMemberTasksComponent } from './component/view-member-tasks/view-member-tasks.component';
import { AssignTaskMemberComponent } from './component/assign-task-member/assign-task-member.component';
import { TaskDetailComponent } from './component/task-detail/task-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexPageComponent } from './component/index-page/index-page.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { RegistrationPageComponent } from './component/registration-page/registration-page.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { EditTaskPageComponent } from './component/edit-task-page/edit-task-page.component';

import {AuthGuard} from 'src/app/auth.guard';
import { AdminAuthGuard } from './admin.auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    TaskDetailComponent,
    AllTasksComponent,
    CreateTaskComponent,
    CreateMemberComponent,
    ViewMemberTasksComponent,
    AssignTaskMemberComponent,
    IndexPageComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    DashboardComponent,
    EditTaskPageComponent,
  ],
    imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MatSelectModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    TasksService, AuthGuard, AdminAuthGuard
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
