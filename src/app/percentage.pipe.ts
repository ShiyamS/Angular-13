import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'percentage'
})
export class Percentage implements PipeTransform {
  transform(value: number, totalMarks: number, decimal: number) {
    console.log("Pure Pipe")
    return (value / totalMarks * 100).toFixed(decimal)
  }
}
