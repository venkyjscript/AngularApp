import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class MiddlewareService {
readonly ApiUrl="http://localhost:5000"
  constructor(private http:HttpClient) { }

  getDepList():Observable<any[]>{
    var ls=this.http.get<any>(this.ApiUrl+'/api/Departments');
    return this.http.get<any>(this.ApiUrl+'/api/Departments');
  }
  addDep(val:any){
    return this.http.post(this.ApiUrl+'api/Departments',val);
  }
}
