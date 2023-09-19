import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ProcessForm() {
    //Write logic to process the form
    this.router.navigate(['About']);
  }
}
