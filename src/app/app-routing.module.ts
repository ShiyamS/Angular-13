import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { CourseComponent } from './courses/course/course/course.component';
import { CourseGuardService } from './services/course-guard.service';
import { CanDeactiveGuardService } from './services/candeactivate-guard.service';
import { CourseResolverService } from './services/course-resolve.service';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Courses', component: CoursesComponent, resolve: { courses: CourseResolverService } },
  // { path: 'Courses/Course/:id', component: CourseComponent },
  {
    path: 'Courses', canActivateChild: [CourseGuardService], children: [
      {
        path: "Course/:id", component: CourseComponent,
        // canActivate:[CourseGuardService]
      }]
  },
  { path: 'About', component: AboutComponent },
  { path: 'Contact', canDeactivate: [CanDeactiveGuardService], component: ContactComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
