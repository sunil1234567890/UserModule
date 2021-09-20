import { Component, OnInit,Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {UsersService} from '../shared/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';



@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  title:any=" Add User"
    userForm: FormGroup;
    postData:any;
    editdata:any;
   
    @Input() formType: any;
    @Input() titlename: any;
    @Input()  _id:any;
  constructor(private fb: FormBuilder,
    private userService:UsersService,
    private route: ActivatedRoute,
    private router: Router,) {
    
      this.userForm = this.fb.group({
          'first_name': [null,Validators.required],
          'last_name': [null,Validators.required],
          'email': [null,Validators.required],
          'phone': [null],
          'img': [null],
         
      });
   }
   ngOnInit():void{
    if (this.formType === 'edit') {
     
      this.title="Edit User";
      this.getUserDetailsById();
      console.log("userID",this._id);
      console.log("titlename",this.titlename);

  }
//   if (this.formType === 'view') {    
//     this.title="View User";
//     this.getUserDetailsById();
//     console.log("userID",this._id);
//     console.log("titlename",this.titlename);
   
// }
   }

   addUser(){
if(this.userForm.valid){
  let body = this.userForm.value;
  let id=this._id;
  console.log("body",body)
  if(this.formType === 'edit'){
    this.userService.editUser(id,body).subscribe((res)=>{
      this.editdata=res
      console.log("editdata",this.editdata);
    });
    this.router.navigate(['/']);


  }else{
    this.formType === 'add'
    this.userService.addUser(body).subscribe((res)=>{
      this.postData=res
      console.log("postData",this.postData);
    });
    this.router.navigate(['/']);


  }
 

}
  
   }


   getUserDetailsById(){
     const data_id= this._id;
    this.userService.getUserDetailsById(data_id).subscribe((res)=>{

      let userby_id:any=[];
      userby_id=res;
      console.log("userData",userby_id);
      this.userForm.patchValue({
        first_name:userby_id.first_name,
        last_name: userby_id.last_name,
        email: userby_id.email,
       phone:userby_id.phone,
        img: userby_id.profile,
    });
    });
 
  }

  onResetForm(){
    this.userForm.reset();

  }
  }