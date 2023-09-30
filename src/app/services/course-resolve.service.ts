import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { CoursesService } from "./courses.service";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class CourseResolverService implements Resolve<any>{

  constructor(private courses: CoursesService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.courses.getAllCourses().then((value) => {
      return value;

    })
  }
}
