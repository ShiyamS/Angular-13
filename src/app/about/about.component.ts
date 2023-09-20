import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  GoToHome() {
    this.router.navigate(['Home'], { relativeTo: this.activatedRoute });
    // this.router.navigateByUrl('Home');
    //this.router.navigate(['Home'], {relativeTo: this.route})//localhost:4200/About/Home
  }
}
