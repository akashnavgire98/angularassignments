import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {DataService} from "../data.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  
})
export class FormComponent implements OnInit {
  userfrm:any;
  UserData:any;
  GenderArr:any=["male","female"];
  allCourse:any=[];
  dotnet:boolean=false;
  angular:boolean=false;
  editMode:boolean=false;
  courseArr: any=["Angular","Dot Net"];


  constructor(private fb:FormBuilder, private user: DataService) { }

  ngOnInit(): void {
    this.LoadUser();
    this.userfrm = this.fb.group({
      id:'',
      name:'',
      mobile_no:'',
      Gender:'',
      education:'',
      course:[]
    })
  }

  LoadUser()
  {
    this.user.GetAllUser().subscribe(data=>{
    //  console.log(data);
      this.UserData = data;
      //console,log(this.UserData);
    })
  }

  onSubmit(frm:any){
    // console.log(frm);
    const fuser = this.userfrm.value;
    // console.log(fuser);
    if(this.editMode){
      this.user.updateUser(fuser).subscribe((res:any)=>{
        this.editMode=false;
        this.LoadUser();
        this.userfrm.reset();
        this.dotnet= false;
        this.angular = false;
        this.allCourse = [];

      })

    }
    else{
      this.user.AddNewUser(fuser).subscribe((res:any)=>{
        this.LoadUser();
        this.userfrm.reset();
        this.dotnet=false;
        this.angular=false;
        this.allCourse=[];
      })
    }
  }

  onCheck(event:any)
  {
    event.preventDefault();
    const{name,checked} = event.target;
    if(checked && name === 'dotnet'){
      this.allCourse.push('Dot Net');
      this.dotnet=true;

    }else if (checked && name === 'angular'){
      this.allCourse.push('Angular');
      this.angular=true;
    }
    else{
      this.allCourse=[];
    }
    this.userfrm.controls['course'].setValue(this.allCourse);
  }

  onDelete(id:number){
    console.log(id);

    this.user.deleteUser(id).subscribe((res:any)=>{
      console.log("deleted",res);
      this.LoadUser();
    })
  }

//   reset()
//   {
//     this.userfrm.reset();
//   }

  onUpdate(user:any){
    this.editMode = true;
    this.userfrm =this.fb.group({
      id:user.id,
      name:user.name,
      mobile_no:user.mobile_no,
      Gender:user.Gender,
      education: user.education,
      course: user.course
    })
  }
 }
