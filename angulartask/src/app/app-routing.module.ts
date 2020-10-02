import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { CreateTaskComponent } from './component/create-task/create-task.component';
import { CreateMemberComponent } from './component/create-member/create-member.component';
import { ViewMemberTasksComponent } from './component/view-member-tasks/view-member-tasks.component';
import { AssignTaskMemberComponent } from './component/assign-task-member/assign-task-member.component';
import { TaskDetailComponent } from './component/task-detail/task-detail.component';
import { AllTasksComponent } from './component/all-tasks/all-tasks.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { IndexPageComponent} from './component/index-page/index-page.component';
import { LoginPageComponent} from './component/login-page/login-page.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { EditTaskPageComponent } from './component/edit-task-page/edit-task-page.component';
import {AuthGuard} from 'src/app/auth.guard';
import { AdminAuthGuard } from './admin.auth.guard';


const routes: Routes =  [

{path: '', component: IndexPageComponent},
{path: 'login', component: LoginPageComponent},
  // admin
{path: 'dashboard', component: DashboardComponent,
        children :
        [{path: '', component: AllTasksComponent, canActivate: [ AuthGuard] },

        {path: 'createTask', component: CreateTaskComponent , canActivate: [ AuthGuard, AdminAuthGuard] },

        {path: 'assignTask', component: AssignTaskMemberComponent, canActivate: [ AuthGuard, AdminAuthGuard] },

        {path: 'createMember', component: CreateMemberComponent, canActivate: [ AuthGuard, AdminAuthGuard] },

        {path: ':id', component: TaskDetailComponent, canActivate: [ AuthGuard] },

        {path: 'edit/:id', component: EditTaskPageComponent, canActivate: [ AuthGuard, AdminAuthGuard] },

        {path: 'user/:id', component: ViewMemberTasksComponent, canActivate: [ AuthGuard] },

        {path: 'user/task/:id', component: TaskDetailComponent, canActivate: [ AuthGuard] },
        // {path: '**', redirectTo: '', pathMatch: 'full' },
        {path: '**', component: PageNotFoundComponent},
        ]
},
// {path: '', redirectTo: '/allTasks', pathMatch: 'full' },

// member
// {path: 'member', redirectTo: 'member/tasks', pathMatch: 'full' },

{path: '**', component: PageNotFoundComponent},
];

@NgModule({
imports: [CommonModule, RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }

export const childRoute = [
AllTasksComponent,
TaskDetailComponent
];
