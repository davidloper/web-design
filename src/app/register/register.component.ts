import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService : UserService) { }

  ngOnInit() {
  }

  submit(data :FormData){
    let {name,email,password} = data;
    data = {name,email,password};
    
    // console.log(this.userService.register(data));
    this.userService.register(data).subscribe(
      (data) => console.log(data),
    );
  }
}

interface FormData{
  name : string;
  email : string;
  password : string;
}
