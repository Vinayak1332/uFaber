import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss']
})
export class View1Component implements OnInit {

  data: any;
  submitted: boolean = false;
  addUser: any;

  public "registerForm": FormGroup;
  public "deleteForm": FormGroup;

  constructor(private appService: AppService) { }

  ngOnInit(){
    this.registerForm = new FormGroup({
      id: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      phoneNo: new FormControl('',[Validators.required, Validators.maxLength(10)])
    });
    this.deleteForm = new FormGroup({
      id: new FormControl('', Validators.required)
    })
    this.appService.getAllData().subscribe((res) => {
      this.data = res;
      console.log("Welcome data", this.data);
    });
  }

  public myError = (controlName: string, errorName: string) =>{
    return this.registerForm.controls[controlName].hasError(errorName);
  }

  insertUser(){
    this.submitted = true;
    const data = {
      id: this.registerForm.value.id,
      username: this.registerForm.value.username,
      email: this.registerForm.value.email,
      phone_no: this.registerForm.value.phoneNo
    }

    this.appService.insertUser(data).subscribe((res) =>{
    },(err)=>{
      if(!err){
        console.log("User not inserted" + err);
      }else{
        console.log("User inserted successfully");
      }
    })
  };

  updateUser(){
    this.submitted = true;
    const data = {
      id: this.registerForm.value.id,
      username: this.registerForm.value.username,
      email: this.registerForm.value.email,
      phone_no: this.registerForm.value.phoneNo
    }    

    this.appService.updateUserById(data).subscribe((res) =>{
    },(err)=>{
      if(!err){
        console.log("User not inserted" + err);
      }else{
        console.log("User inserted successfully");
      }
    })
  };

  deleteUser(){
    const userId = this.deleteForm.value.id;
    const deleteUser = this.appService.deleteUserById(userId).subscribe((data) => {
      console.log("sadasdasdasd", deleteUser);
    },(err)=>{
      if(!err){
        console.log("User not deleted");
      } else {
        console.log("Successfully deleted");
      }
    })
    
  }


}
