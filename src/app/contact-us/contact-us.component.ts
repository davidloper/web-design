import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  private success: boolean;
  private submitted: boolean = false;
  constructor(private feedbackService :FeedbackService) { }

  ngOnInit() {
  }
  
  submit(contactUsFormData: FormData)
  {
    this.submitted = true;

    this.feedbackService.store(contactUsFormData).subscribe(
      (data) => this.success = <boolean>data,
      (data) => this.success = false);
  }
}

interface FormData{
  name : string;
  email : string;
  message : string;
}