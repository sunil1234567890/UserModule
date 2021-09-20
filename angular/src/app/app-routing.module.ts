import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdduserComponent} from './adduser/adduser.component'
import {UsersComponent} from './users/users.component'
import {EdituserComponent} from './edituser/edituser.component'
import {ViewuserComponent} from './viewuser/viewuser.component'



const routes: Routes = [
  { path:'',component:UsersComponent},   

  { path:'adduser',component:AdduserComponent},
  { path: 'edituser/:id',component: EdituserComponent},
  { path: 'viewuser/:id',component: ViewuserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
