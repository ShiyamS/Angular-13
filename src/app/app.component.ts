import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'routing';

  constructor(private activatedRoute: ActivatedRoute, private authUser: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe((value) => {
      // console.log(value)
      if (value) {
        this.smoothScroll(value);
      }

    });
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
