import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


import { TasksService } from './services/tasks.service';

@Injectable()
export class AdminAuthGuard implements CanActivate {


    constructor(private taskService: TasksService, private router: Router) {}

    jwtHelper = new JwtHelperService();


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

        const isAdmin = localStorage.getItem('isAdmin').toString();

        if (isAdmin.toString()[1] === 'ADMIN'.toString()[0]) {
            console.log(isAdmin.toString()[1] === 'ADMIN'.toString()[0])
            return true;

        }else{
        this.router.navigate(['login']);
        return false;
        }

    }

}
