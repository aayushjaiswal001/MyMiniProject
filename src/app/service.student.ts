import { Student } from "./student";

export class StudentService{
    students: Student[] = [
        {name:'Mark Waugh',course:'MBA',marks:650,DOB: new Date('11-12-1998'),gender:'male'},
        {name:'Steve Madden',course:'Engineering',marks:213,DOB: new Date('1-1-1988'),gender:'male'},
        {name:'Ion Mate',course:'Doctor',marks:243,DOB: new Date('12-12-2001'),gender:'female'},
        {name:'Neil Nitin',course:'MBA',marks:775,DOB: new Date('5-10-2011'),gender:'male'},
        {name:'Sarah Keith',course:'Brewary',marks:993,DOB: new Date('07-09-2002'),gender:'female'}
    ]

    totalMarks: number =1000;
}