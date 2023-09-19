import { Component } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private coursesService: CoursesService) { }

  courses: any = [];

  ngOnInit(): void {
    this.courses = this.coursesService.courses;
  }
}
