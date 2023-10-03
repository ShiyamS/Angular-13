import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './courses/course/course/course.component';
import { CoursesService } from './services/courses.service';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';
import { CourseGuardService } from './services/course-guard.service';
import { AuthService } from './services/auth.service';
import { CanDeactiveGuardService } from './services/candeactivate-guard.service';
import { CourseResolverService } from './services/course-resolve.service';
import { StudentsService } from './services/students.service';
import { Percentage } from './percentage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    CoursesComponent,
    CourseComponent,
    ErrorComponent,
    Percentage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CoursesService, CourseGuardService, AuthService, CanDeactiveGuardService, CourseResolverService, StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
