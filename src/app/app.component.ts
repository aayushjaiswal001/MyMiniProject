import { Component, OnInit } from '@angular/core';
import { StudentService } from './service.student';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentService]
})
export class AppComponent implements OnInit{
  title = 'AngularPipes';
  students: Student[] = [];
  totalMarks: number =1;
  filteredstudents: Student[] = [];
  _filtertext: string='';
  totalStudent = new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve(this.filteredstudents.length);
    },2000)
  })

  get filtertext(){
    return this,this._filtertext;
  }

  set filtertext(value:string){
    this._filtertext = value;
    this.filteredstudents=this.filterStudentByGender(value);
  }

  constructor(private studentService: StudentService){}
  ngOnInit() {
      this.students = this.studentService.students;
      this.totalMarks = this.studentService.totalMarks;
      this.filteredstudents=this.students;
  }

  AddDummyStudent(){
    //the studentcopy is a referemce, hence the date will be filtered as it is a pure change wrt reference.
    // let studentcopy = Object.assign([],this.students);
    // studentcopy.push({name:'TEST',course:'Law',marks:707,DOB:new Date(),gender:'Female'});
    // this.students=studentcopy;
    this.students.push({name:'TEST',course:'Law',marks:707,DOB:new Date(),gender:'Female'});
    this.filteredstudents= this.filterStudentByGender(this._filtertext);
  }

  ChangeGender(){
    //impure change
    this.students[0].gender= 'female';
    this.filteredstudents= this.filterStudentByGender(this._filtertext);
  }

  filterStudentByGender(filterTerm:string){
    console.log("filter pipe called");
        if(this.students.length===0 || this.filtertext==='')
        {
            return this.students;
        }
        else
        {
            return this.students.filter((student)=>
            {
                return student.gender?.toLowerCase()===filterTerm.toLowerCase()
            })
        }
  }
}
