import { Component } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  constructor(private coursesService: CoursesService) { }

  courses: any = [];

  ngOnInit(): void {
    this.courses = this.coursesService.courses;
  }
}
