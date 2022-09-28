import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  strURL:string = "http://localhost:3000/ShauryaUser/";

  GetAllUser()
  {
    return this.http.get(this.strURL);
  }

  AddNewUser(user:any)
  {
    return this.http.post<any>(this.strURL,user);
  }

  deleteUser(id:any)
  {
    const deleteURL = this.strURL + id;
    return this.http.delete(deleteURL,id);
  }

  updateUser(data:any)
  {
    const UpdateURL = this.strURL + data.id;
    return this.http.put(UpdateURL,data);
  }
}
