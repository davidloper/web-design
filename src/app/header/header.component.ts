import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logged_in:boolean = false;

  constructor(private cookieService: CookieService, private userService:UserService) { }

  ngOnInit() {
    if(this.cookieService.get('token')){
      this.logged_in = true;
    }
  }
  logout(){
    this.userService.logout({token : this.cookieService.get('token')}).subscribe(
      (data) => {
        this.cookieService.delete('token');
        location.replace('/');
      },
      (data) => {
        this.cookieService.delete('token');
        location.replace('/');
      }
    );
  }

}
