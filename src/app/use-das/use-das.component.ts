import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-use-das',
  templateUrl: './use-das.component.html',
  styleUrls: ['./use-das.component.css']
})
export class UseDasComponent implements OnInit {

  firstName : string = "";
  lastName : string = "";
  middleName : string = "";
  email : string = "";
  password : string = "";
  phone : number = 0;
  dob : string = "";
  gender : string = "";
  nationality : string = "";
  aadharNo : number = 0;
  panNo : string = "";

  constructor(private share: ShareService,
              private http: HttpClient) { }

  ngOnInit(): void {
    let user_details : string[] = this.share.getUser();
    this.http.get<any>("http://localhost:3000/users")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        if(a.email === user_details[0] && a.password === user_details[1]){
          this.firstName = a.firstName;
          this.lastName = a.lastName;
          this.middleName = a.middleName;
          this.email = a.email;
          this.password = a.password;
          this.phone = a.phone;
          this.dob = a.dob;
          this.gender = a.gender;
          this.nationality = a.nationality;
          this.aadharNo = a.aadharNo;
          this.panNo = a.panNo;
        }  
      });
      if(1){
        // this.share.showUserFun();
        // this.share.setShow(this.show);
        // this.event.emit(true);
        // alert("Login successful !!!");
        // console.log("here");
        
        // this.share.setUser(this.loginForm.value.email, this.loginForm.value.password);

        // this.loginForm.reset();
        // this.router.navigate(['use-das']);
        // this.event2.emit(false);
        // this.event3.emit(true);
      }
      else{
        alert("user not found");
      }
    },err =>{
      alert("Something went wrong!!");
    })
    
  }

}
