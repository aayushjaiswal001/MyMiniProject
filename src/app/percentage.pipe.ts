import { DecimalPipe } from "@angular/common";
import { Pipe,PipeTransform } from "@angular/core";


@Pipe({
    name: 'percentage'
    //pure:true
})
export class PercentagePipe implements PipeTransform{
    transform(value:number,totalMarks:number,decimal:number) {
        console.log("percentage pipe called");
        return (value/totalMarks * 100).toFixed(decimal);
        
    }
}