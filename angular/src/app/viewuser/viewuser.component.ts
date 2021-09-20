import { Component, OnInit,Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {UsersService} from '../shared/users.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
  title:any="View User"
  userForm: FormGroup;
  postData:any;
  editdata:any;
  sub: any;
  id:any
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

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; 
      console.log("editID",this.id);

   });
    this.getUserDetailsById();
  }

  getUserDetailsById(){
    const data_id= this.id;
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
}
