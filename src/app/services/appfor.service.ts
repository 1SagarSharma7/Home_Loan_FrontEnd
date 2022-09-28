import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppforService {

  constructor(private http : HttpClient) { }

  postUser(data : any){
    return this.http.post<any>("http://localhost:3000/users", data)
    .pipe(map((res:any) => {
      return res;
    }))
  }

  updateUser(data : any, id : number){
    return this.http.put<any>("http://localhost:3000/users/" + id, data)
    .pipe(map((res:any) => {
      return res;
    }))
  }

  updateIncome(data : any, id : number){
    return this.http.put<any>("http://localhost:3000/inc-det/" + id, data)
    .pipe(map((res:any) => {
      return res;
    }))
  }

  updateLoan(data : any, id : number){
    return this.http.put<any>("http://localhost:3000/loa-det/" + id, data)
    .pipe(map((res:any) => {
      return res;
    }))
  }

  postIncDet(data : any){
    return this.http.post<any>("http://localhost:3000/inc-det", data)
    .pipe(map((res:any) => {
      return res;
    }))
  }

  postLoaDet(data : any){
    return this.http.post<any>("http://localhost:3000/loa-det", data)
    .pipe(map((res:any) => {
      return res;
    }))
  }

}