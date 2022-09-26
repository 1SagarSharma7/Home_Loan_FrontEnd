import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  
  $isLoggedIn = new EventEmitter();
  Other : boolean = true;
  User : boolean = true;
  Admin : boolean = true;
  

  constructor() { }

  showOtherFun(){
    console.log("aaaaaaaahhhhhh!!!");
    let val: boolean[] = [true, false, false];
    this.$isLoggedIn.emit(val);
  }
  
  showUserFun(){
    console.log("aaaaaaaahhhhhh!!!");
    let val: boolean[] = [false, true, false];
    this.$isLoggedIn.emit(val);
  }

  showAdminFun(){
    console.log("aaaaaaaahhhhhh!!!");
    let val: boolean[] = [false, false, true];
    this.$isLoggedIn.emit(val);
  }



  // getShow(){
  //   return this.show;
  // }

  // setShow(data : boolean){
  //   this.show = data;
  // }

  // setShowAdmin(data : any){
  //   	this.showAdmin = data; 
  // }

  // getShowAdmin(){
  //   return this.showAdmin;
  // }

  // setShowUser(data : any){
  //   	this.showUser = data; 
  // }

  // getShowUser(){
  //   return this.showUser;
  // }

  // setShowLogout(data : any){
  //   	this.showLogout = data; 
  // }

  // getShowLogout(){
  //   return this.showLogout;
  // }

}
