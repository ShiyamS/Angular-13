import { Injectable } from '@angular/core';
import { Student } from '../student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }

  students: Student[] = [
    {
      name: 'Shiyam',
      course: 'MCA - Full Stack',
      marks: 595,
      DOB: new Date('05-31-1998'),
      gender: 'Male',
    },
    {
      name: 'Anu',
      course: 'MCA - Cloud Computing',
      marks: 590,
      DOB: new Date('01-24-1999'),
      gender: 'Female',
    },
    {
      name: 'Person 2',
      course: 'MCA - Data Science',
      marks: 530,
      DOB: new Date('12-02-1998'),
      gender: 'Male',
    },
    {
      name: 'Person 3',
      course: 'MBA',
      marks: 400,
      DOB: new Date('02-02-1999'),
      gender: 'Male',
    },
    {
      name: 'Person 4',
      course: 'MBA',
      marks: 540,
      DOB: new Date('01-01-1998'),
      gender: 'Female',
    },
    {
      name: 'Person 5',
      course: 'MBA',
      marks: 590,
      DOB: new Date('12-09-1999'),
      gender: 'Female',
    },
  ]

  totalMarks = 600;
}
