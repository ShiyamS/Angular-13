import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDeactiveComponent } from '../services/candeactivate-guard.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, IDeactiveComponent {
  constructor(private router: Router) { }

  firstName!: string;
  lastName!: string;
  country!: string;
  subject!: string;

  ngOnInit(): void {
  }

  canExist() {
    if (this.firstName || this.lastName || this.country || this.subject) {
      return confirm("You have some done few changed changes, are sure you want to move forward ?")
    } else {
      return true;
    }
  }

  ProcessForm() {
    //Write logic to process the form
    this.router.navigate(['About']);
  }
}
