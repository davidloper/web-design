import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert-bar',
  templateUrl: './alert-bar.component.html',
  styleUrls: ['./alert-bar.component.css']
})
export class AlertBarComponent implements OnInit {

  @Input() private boldText:string;
  @Input() private text:string;
  @Input() private success:boolean;
  
  constructor() { }

  ngOnInit() {
  }

}
