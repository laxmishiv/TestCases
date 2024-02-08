import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http : HttpClient) { }

  getAllUsers(){
   return this.http.get("api/users");
  }
  getuserbyid(id:number){
    return this.http.get("api/users/" + id);
  }
  updateuser(id:number,updatedBody:any){
    return this.http.put("api/users/" +id,updatedBody)
  }
}
