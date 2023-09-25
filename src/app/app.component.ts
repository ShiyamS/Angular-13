import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'routing';

  constructor(private activatedRoute: ActivatedRoute) { }

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
}
