import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HomeServiceService } from '../HomeService/home-service.service';

@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.scss']
})
export class FormDetailsComponent implements OnInit {
  userDetails:any = JSON.parse((localStorage.getItem('loanUserDetails'))!);
  constructor(private homeservice:HomeServiceService,public dialogRef: MatDialogRef<FormDetailsComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }
  propertyDetails:any;
  sum=0;
  x:any;
  ngOnInit(): void {
    console.log(this.data);

    this.GetPropertyDetails();
  }
  GetPropertyDetails()
  {
    this.homeservice.GetPropertyDetails(this.userDetails.userId,this.data.form.formId).subscribe((res:any)=>{
      this.propertyDetails = res.data;
      console.log(this.propertyDetails);
    });
  }
  GetTotal()
  {
    this.sum=0;
    this.propertyDetails.forEach((x:any) => {
      this.sum +=  parseInt(x.propertyWorth);
      
    });
    return this.sum;
  }

}
