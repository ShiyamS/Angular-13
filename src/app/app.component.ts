import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { StudentsService } from './services/students.service';
import { Student } from './student';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // students!: Student[];
  // filteredStudents!: Student[];
  // totalMarks!: number;
  // title = 'routing';
  // _filterTextValue: string = "";

  // totalStudents = new Promise<number>((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(this.filteredStudents.length)
  //   }, 2000)
  // })

  // spinnerDiv = false;

  // constructor(private activatedRoute: ActivatedRoute, private authUser: AuthService, private router: Router, private StudentService: StudentsService) { }


  // get filterTextValue() {
  //   return this._filterTextValue;
  // }

  // set filterTextValue(filteredValue: string) {
  //   this._filterTextValue = filteredValue;
  //   this.filteredStudents = this.filteredStudentByGender(filteredValue);
  // }

  // filteredStudentByGender(filteredValue: string) {
  //   if (this.filterTextValue === "" || this.students.length == 0) {
  //     return this.students
  //   } else {
  //     return this.students.filter((student) => {
  //       return student.gender.toLowerCase() === filteredValue.toLowerCase();
  //     })
  //   }
  // }

  // ngOnInit(): void {

  //   this.students = this.StudentService.students;
  //   this.totalMarks = this.StudentService.totalMarks;

  //   this.filteredStudents = this.students;



  //   this.activatedRoute.fragment.subscribe((value) => {
  //     // console.log(value)
  //     if (value) {
  //       this.smoothScroll(value);
  //     }

  //   });

  //   this.router.events.subscribe((route: Event) => {
  //     if (route instanceof NavigationStart) {
  //       this.spinnerDiv = true;
  //     }

  //     if (route instanceof NavigationEnd || route instanceof NavigationCancel || route instanceof NavigationError) {
  //       this.spinnerDiv = false;
  //     }
  //   })


  // }

  // addFakeStudentData() {
  //   // let studentCopy = Object.assign([], this.students);
  //   // studentCopy.push({
  //   //   name: 'Test 9',
  //   //   course: 'MCA - Full Stack',
  //   //   marks: 345,
  //   //   DOB: new Date(),
  //   //   gender: 'Male',
  //   // })
  //   // Once a fake copy is created, and then the value is re assigned in order to reflect the data
  //   // If manipulate the reference data, its doses not reflects and become a impure pipe
  //   // this.students = studentCopy;

  //   //Impure Pipe
  //   this.students.push({
  //     name: 'Test 9',
  //     course: 'MCA - Full Stack',
  //     marks: 345,
  //     DOB: new Date(),
  //     gender: 'Male',
  //   })

  //   this.filteredStudents = this.filteredStudentByGender(this._filterTextValue);
  // }

  // changeGender() {
  //   // This become an inpur change as the main student data in not refelecting the change during filtering.
  //   // this.StudentService.students[0].gender = "Female"

  //   // let studentCopy2: Student[] = Object.assign([], this.students);
  //   // studentCopy2[0].gender = 'female';
  //   // this.students = studentCopy2;

  //   //Impure change
  //   this.students[0].gender = "Female"
  //   this.filteredStudents = this.filteredStudentByGender(this._filterTextValue);

  // }

  // onMouseMove() {

  // }




  // smoothScroll(id: string) {
  //   document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  // }

  // logIn() {
  //   this.authUser.login();
  // }

  // logOut() {
  //   this.authUser.logOut();
  //   this.router.navigate(['']);
  // }
  // Template Form

  // defaultGender = 'Male'
  // @ViewChild('myForm') form!: NgForm;
  // name!: string;
  // email!: string;
  // phone!: number;
  // address!: string;
  // message!: string;
  // gen!: string;

  // onSubmit() {
  //   console.log(this.form)

  //   this.name = this.form.value.personalDetails.name;
  //   this.email = this.form.value.personalDetails.email;
  //   this.phone = this.form.value.phone;
  //   this.address = this.form.value.address;
  //   this.message = this.form.value.message;
  //   this.gen = this.form.value.gender;


  //   this.form.reset();

  // }

  gender: any = [
    { id: 1, value: 'Male' },
    { id: 2, value: 'Female' },
    { id: 3, value: 'Other' },
  ]


  // setDefaultValue() {

  // While trying to set, it set the value in the Form -> but it ll not be visible for user
  // this.form.value.personalDetails.name = "Jyothi"
  // this.form.value.personalDetails.email = "jyothi31@gmail.com"

  // setValue
  // if existing value are already set and then we click on the setValue -> it set only the value mentioned
  // in the setValue
  // this.form.setValue({
  //   address: '',
  //   gender: '',
  //   message: '',
  //   phone: '',
  //   personalDetails: {
  //     name: 'Jyothi',
  //     email: 'jyothi31@gmail.com'
  //   }
  // })

  //patchValue
  // It usefull to specify on the specific value
  //   this.form.form.patchValue({
  //     personalDetails: {
  //       name: 'Jyothi',
  //       email: 'jyothi31@gmail.com'
  //     }
  //   })
  // }


  //  Reactive Form

  reactiveForm!: FormGroup;

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      personalDetails: new FormGroup({
        name: new FormControl(null, [Validators.required, this.errorCheck]),
        email: new FormControl(null, [Validators.required, Validators.email, this.errorCheck]),
      }),
      phone: new FormControl(null, [Validators.required, Validators.maxLength(10)]),
      address: new FormControl(null),
      message: new FormControl('Random Message'),
      gen: new FormControl('Male'),
      skills: new FormArray([
        new FormControl(null, Validators.required),
      ])
    })
  }

  onSubmit() {
    console.log(this.reactiveForm);
  }

  addSkill() {
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null, Validators.required))
  }

  // Custom Validators
  errorCheck(control: FormControl) {

    if (control.value != null && control.value.indexOf(' ') != -1) {
      return { spaceAllowed: true }
    }
    return null;

  }
}
