import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {CookieService} from 'ngx-cookie-service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private login: boolean = false;
  private submitted: boolean = false;
  private success: any = false;
  // private success: boolean = false;
  private error:string;

  constructor(
    private userService : UserService,
    private cookieService :CookieService,
    // private router : Router,
    ) { }

  ngOnInit() {
  }

  submit(data){

    this.userService.login(data).subscribe(
      (data : response) => {
        this.success = true;
        this.cookieService.set('token',data['token']);
        location.replace('/');
        // this.router.navigate(['/']);
      },
      (error) => {
        this.error = error.error;
      },
      );
    this.submitted = true;
  }
}
interface response{
  token : string;   
}
