import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'routing';

  spinnerDiv = false;

  constructor(private activatedRoute: ActivatedRoute, private authUser: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe((value) => {
      // console.log(value)
      if (value) {
        this.smoothScroll(value);
      }

    });


    this.router.events.subscribe((route: Event) => {
      if (route instanceof NavigationStart) {
        this.spinnerDiv = true;
      }

      if (route instanceof NavigationEnd || route instanceof NavigationCancel || route instanceof NavigationError) {
        this.spinnerDiv = false;
      }
    })
  }


  smoothScroll(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  logIn() {
    this.authUser.login();
  }

  logOut() {
    this.authUser.logOut();
    this.router.navigate(['']);
  }
}
