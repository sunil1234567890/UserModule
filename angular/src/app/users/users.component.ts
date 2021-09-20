import { Component, OnInit } from '@angular/core';
import {UsersService} from '../shared/users.service';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[UsersService],
})
export class UsersComponent implements OnInit {
userData:any=[];
title:any=" User Form";
sub: any;
  constructor(private userService:UsersService,
    private route: ActivatedRoute,
        private router: Router,) { }

  ngOnInit(): void {
    this.getUserlist();
  }
getUserlist(){
  this.userService.getuserList().subscribe((res)=>{
    this.userData=res
    console.log("userData",this.userData);
  });
}
onDeleteData(id:string){
if(confirm('Are you sure to remove this data?')==true){
  this.userService.deleteUser(id).subscribe((res)=>{
    location.reload();
  });

}

}
}
