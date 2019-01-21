import { Component, OnInit } from '@angular/core';
import { SubscribeService } from '../subscribe.service';
// import { FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.css']
})
export class SubscribeFormComponent implements OnInit {
  
  private success: boolean;
  private submitted: boolean;

  constructor(private subscribeService :SubscribeService) { }

  ngOnInit() {
  }

  submit(data : FormData){

    this.submitted = true;
    this.subscribeService.store(data).subscribe(
      (data) => {this.success = <boolean>data;console.log(data)},
      (data)=> this.success = false
    );
  }

}

interface FormData{

  name : string;
  email : string;
  address : string;
  city : string;
  state : string;
  zip : string;
  country : string;
  by_email : boolean;
  by_address : boolean;
}