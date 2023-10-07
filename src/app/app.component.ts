import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { StudentsService } from './services/students.service';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  students!: Student[];
  totalMarks!: number;
  title = 'routing';
  filterTextValue: string = "";

  spinnerDiv = false;

  constructor(private activatedRoute: ActivatedRoute, private authUser: AuthService, private router: Router, private StudentService: StudentsService) { }



  ngOnInit(): void {

    this.students = this.StudentService.students;
    this.totalMarks = this.StudentService.totalMarks;



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

  addFakeStudentData() {
    // let studentCopy = Object.assign([], this.students);
    // studentCopy.push({
    //   name: 'Test 9',
    //   course: 'MCA - Full Stack',
    //   marks: 345,
    //   DOB: new Date(),
    //   gender: 'Male',
    // })
    // Once a fake copy is created, and then the value is re assigned in order to reflect the data
    // If manipulate the reference data, its doses not reflects and become a impure pipe
    // this.students = studentCopy;

    //Impure Pipe

    this.students.push({
      name: 'Test 9',
      course: 'MCA - Full Stack',
      marks: 345,
      DOB: new Date(),
      gender: 'Male',
    })
  }


  changeGender() {
    // This become an inpur change as the main student data in not refelecting the change during filtering.
    // this.StudentService.students[0].gender = "Female"

    // let studentCopy2: Student[] = Object.assign([], this.students);
    // studentCopy2[0].gender = 'female';
    // this.students = studentCopy2;

    //Impure change
    this.students[0].gender = "Female"

  }

  onMouseMove() {

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
