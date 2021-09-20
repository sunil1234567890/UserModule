import { Injectable } from '@angular/core';
import {HttpClient,} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

//import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
//import {Users} from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  readonly baseURL ='http://localhost:3000/users'
selecteduser:any;
user=[];
  constructor(private http:HttpClient) { }

  addUser(body:any){
    return this.http.post(this.baseURL,body)
  }

  getuserList(){
    return this.http.get(this.baseURL);
  }

  getUserDetailsById(_id:string){
    return this.http.get(this.baseURL+ `/${_id}`);
  }

  deleteUser(_id:string){
    return this.http.delete(this.baseURL + `/${_id}`);

  }
 editUser(_id:string,body:any){
    return this.http.put(this.baseURL + `/${_id}`,body);
  }
}
