import { Component, OnInit } from '@angular/core';
// import { FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.css']
})
export class SubscribeFormComponent implements OnInit {
  console = console;
  submitted: boolean;

  constructor() { }

  ngOnInit() {
  }

  submit(){
    this.submitted = true;
  }

}
