import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeServiceService } from '../home-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-apply-loan',
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.scss']
})
export class ApplyLoanComponent implements OnInit {

 
  addProperty:boolean=false;
  UserData :string = JSON.parse((localStorage.getItem('loanUserDetails'))!);
  FullName:string = JSON.parse((localStorage.getItem('loanUserDetails'))!).fullName;
  EmailId:string = JSON.parse((localStorage.getItem('loanUserDetails'))!).emailId;
  propertys : Array<{Name: string, Value: string}>=[];

  constructor(
    private homeService:HomeServiceService,
    private router:Router,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
  }

  showAddProperty()
  {
    this.addProperty=!this.addProperty;
  }

  AddProperty(propertyName:string,propertyPrice:string)
  {
    let parms ={
      Name:propertyName,
      Value:propertyPrice
    }
    console.log("AddProperty");
    console.log(parms);
    this.propertys.push(parms);
    console.log("propertys");
    console.log(this.propertys);
    this.addProperty=!this.addProperty;
  }

  Submit(Reason:string)
  {
    let params={
      Reason:Reason,
      propertys:this.propertys
    }
    console.log(params);
    this.homeService.LoanForm(params).subscribe((res:any)=>
    {      
      if(res.success == true)
        {
          console.log("success");
          this.snackBar.open(`${res.message}`, '', {
            duration: 4000,
            verticalPosition: 'bottom',
            horizontalPosition: 'left'
          });

        }
      this.router.navigate(['home/home']);
    });

  }

}
