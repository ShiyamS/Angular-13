import { Pipe, PipeTransform } from "@angular/core";
import { Student } from "./student";
@Pipe({
  name: "filterStudent"
})
export class Filter implements PipeTransform {
  transform(students: Student[], filterValue: string) {

    if (filterValue === '' || students.length === 0) {
      return students
    } else {
      return students.filter((student) => {
        return student.gender.toLocaleLowerCase() === filterValue.toLocaleLowerCase();
      })
    }
  }


}
