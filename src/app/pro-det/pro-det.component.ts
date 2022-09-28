import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IncDetModel, UserModel } from '../inc-det/inc-det.model';
import { LoaDetModel } from '../loa-det/loa-det.model';
import { AppforService } from '../services/appfor.service';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-pro-det',
  templateUrl: './pro-det.component.html',
  styleUrls: ['./pro-det.component.css']
})
export class ProDetComponent implements OnInit {

  toggle : boolean = true;

  id : number = 0;
  propertyName : string = "";
  propertyLocation : string = "";
  amount : number = 0;
  retirementAge : string = "";
  monthlySalary : string = "";
  organization : string = "";
  user !: UserModel;

  id2 : number = 0;
  loanAmount : string = "";
  tenure : string = "";
  interest : number = 0;
  status : string = "";
  user2 !: UserModel;

  formValue !: FormGroup;
  IncModelObj : IncDetModel = new IncDetModel();

  formValue2 !: FormGroup;
  LoaModelObj : LoaDetModel = new LoaDetModel();


  constructor(private share: ShareService,
    private http: HttpClient,
    private formbuilder: FormBuilder,
    private api: AppforService) { }

  ngOnInit(): void {

    let user_details : string[] = this.share.getUser();
    this.http.get<any>("http://localhost:3000/inc-det")
    .subscribe(res=>{
      const something = res.find((a:any)=>{
        return a.user.email === user_details[0] && a.user.password === user_details[1];
      });
      if(something){console.log("hai application"); this.toggle = false}
      else{console.log("nahi hai application");}
    },err =>{
      alert("Something went wrong!!");
    })


    this.formValue = this.formbuilder.group({
      propertyName : [''],
      propertyLocation : [''],
      amount : [''],
      retirementAge : [''],
      monthlySalary : [''],
      organization : [''],
      user: ['']
    })
    this.getIncome();

    this.formValue2 = this.formbuilder.group({
      loanAmount : [''],
      tenure : [''],
      interest : [''],
      status : [''],
      user: ['']
    })
    this.getLoan();


  }

  getIncome(){
    let user_details : string[] = this.share.getUser();
    this.http.get<any>("http://localhost:3000/inc-det")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        if(a.user.email === user_details[0] && a.user.password === user_details[1]){
          this.propertyName = a.propertyName;
          this.propertyLocation = a.propertyLocation;
          this.amount = a.amount;
          this.retirementAge = a.retirementAge;
          this.monthlySalary = a.monthlySalary;
          this.organization = a.organization;
          this.user = a.user;
          this.id = a.id;
        }  
      });
      if(1){}
      else{alert("user not found");}
    },err =>{
      alert("Something went wrong!!");
    })
  }


  onEdit(){
    this.formValue.controls['propertyName'].setValue(this.propertyName);
    this.formValue.controls['propertyLocation'].setValue(this.propertyLocation);
    this.formValue.controls['amount'].setValue(this.amount);
    this.formValue.controls['retirementAge'].setValue(this.retirementAge);
    this.formValue.controls['monthlySalary'].setValue(this.monthlySalary);
    this.formValue.controls['organization'].setValue(this.organization);
  }


  updateIncomeDetails(){
    this.IncModelObj.propertyName = this.formValue.value.propertyName;
    this.IncModelObj.propertyLocation = this.formValue.value.propertyLocation;
    this.IncModelObj.amount = this.formValue.value.amount;
    this.IncModelObj.retirementAge = this.formValue.value.retirementAge;
    this.IncModelObj.monthlySalary = this.formValue.value.monthlySalary;
    this.IncModelObj.organization = this.formValue.value.organization;
    this.IncModelObj.user = this.user;
    
    console.log(this.IncModelObj);
    
    setTimeout(()=>{
    this.api.updateIncome(this.IncModelObj, this.id)
    .subscribe(res => {
      console.log(res);
      alert("income updated successfully");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getIncome();
      // this.router.navigate(['use-das']);
    },
    err => {
      alert("Something went wrong.");
    })
  }, 2000);

  }


  getLoan(){
    let user_details : string[] = this.share.getUser();
    this.http.get<any>("http://localhost:3000/loa-det")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        if(a.user.email === user_details[0] && a.user.password === user_details[1]){
          this.loanAmount = a.loanAmount;
          this.tenure = a.tenure;
          this.interest = a.interest;
          this.status = a.status;
          this.user2 = a.user;
          this.id2 = a.id;
        }  
      });
      if(1){}
      else{alert("user not found");}
    },err =>{
      alert("Something went wrong!!");
    })
  }

  onEdit2(){
    this.formValue2.controls['loanAmount'].setValue(this.loanAmount);
    this.formValue2.controls['tenure'].setValue(this.tenure);
    this.formValue2.controls['interest'].setValue(this.interest);
    this.formValue2.controls['status'].setValue(this.status);
  }


  updateLoanDetails(){
    this.LoaModelObj.loanAmount = this.formValue2.value.loanAmount;
    this.LoaModelObj.tenure = this.formValue2.value.tenure;
    this.LoaModelObj.interest = this.formValue2.value.interest;
    this.LoaModelObj.status = this.formValue2.value.status;
    this.LoaModelObj.user = this.user2;
    
    console.log(this.LoaModelObj);
    
    setTimeout(()=>{
    this.api.updateLoan(this.LoaModelObj, this.id2)
    .subscribe(res => {
      console.log(res);
      alert("loan updated successfully");
      let ref = document.getElementById('cancel2');
      ref?.click();
      this.formValue2.reset();
      this.getLoan();
      // this.router.navigate(['use-das']);
    },
    err => {
      alert("Something went wrong.");
    })
  }, 2000);

  }


  }

