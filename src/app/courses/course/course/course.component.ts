import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, OnDestroy {
  constructor(private service: CoursesService, private activatedRoute: ActivatedRoute, private router: Router) { }

  course: any;
  courseId: any;

  editMode: boolean = false
  private readonly destory = new Subject<boolean>();

  ngOnInit(): void {
    // Use Snapshot when u think they wont by any change in any course of time for the Param ID


    // This is the better way to get the ID
    // this.courseId = this.route.snapshot.paramMap.get('id');

    // This is the old approach
    // this.courseId = this.route.snapshot.params['id'];
    //this.courseId = this.route.snapshot.params['name'];
    // this.course = this.service.courses.find(x => x.id == this.courseId);

    //  If the Param ID will be chnaging during the course of time try to use Param and subscribe

    this.activatedRoute.paramMap
      .pipe(takeUntil(this.destory))
      .subscribe((param) => {
        this.courseId = param.get('id');
        this.course = this.service.courses.find((x) => x.id == this.courseId)
      })

    this.activatedRoute.queryParamMap.subscribe((param) => {
      this.editMode = Boolean(param.get('edit'));
      console.log(this.editMode)
    })
  }


  onEdit() {
    this.router.navigate(['/Courses/Course', this.courseId], { queryParams: { edit: true } })

  }

  onUpdate() {
    this.router.navigate(['/Courses/Course', this.courseId])
  }


  ngOnDestroy(): void {
    console.log("course comp destroyed")
    this.destory.next(true);
    this.destory.complete();
  }
}
