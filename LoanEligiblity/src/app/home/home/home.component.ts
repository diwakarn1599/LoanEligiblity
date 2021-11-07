import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormDetailsComponent } from '../form-details/form-details.component';
import { HomeServiceService } from '../HomeService/home-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userDetails:any = JSON.parse((localStorage.getItem('loanUserDetails'))!);
  FullName:string = this.userDetails.fullName;
  EmailId:string = this.userDetails.emailId;

  constructor(private router:Router,private homeService:HomeServiceService,public dialog: MatDialog) { }

  forms:any=[];
  searchText:any;
  ngOnInit(): void {
    this.GetLoanDetails();
  }
  Logout()
  {
    localStorage.removeItem('loanUserDetails');
    this.router.navigate(['user/login']);
  }
  GetLoanDetails()
  {
    this.homeService.GetLoanDetails(this.userDetails.userId).subscribe((res:any)=>{
      console.log(res.data);
      this.forms = res.data;
    });
  }
  ViewDetails(form:any)
  {
    this.dialog.open(FormDetailsComponent, {
      panelClass: 'dialog-container-custom-form-details',
      data: {form}
    });
  }
  
}
