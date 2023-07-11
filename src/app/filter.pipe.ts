import { Pipe, PipeTransform } from "@angular/core";
import { Student } from "./student";

@Pipe({
    name:'filterStudent'
})
export class FilterPipe implements PipeTransform{
    transform(students:Student[],filtertext:string) {
        console.log("filter pipe called");
        if(students.length===0 || filtertext==='')
        {
            return students;
        }
        else
        {
            return students.filter((student)=>
            {
                return student.gender?.toLowerCase()===filtertext.toLowerCase()
            })
        }
    }
}