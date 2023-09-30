import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private coursesService: CoursesService, private router: ActivatedRoute) {

  }

  courses: any = [];

  ngOnInit(): void {
    // this.courses = this.coursesService.courses;

    // this.coursesService.getAllCourses().then((value) => {
    //   this.courses = value;
    // })
    this.courses = this.router.snapshot.data['courses']
    console.log("In ngonnint", this.courses);
  }





}


