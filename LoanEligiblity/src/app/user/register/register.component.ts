import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserHttpService } from '../userHttp/user-http.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  RegisterForm!:FormGroup;
  constructor(private userService:UserHttpService, private router:Router) { }
  get f() { return this.RegisterForm.controls; }
  ngOnInit(): void {
    this.RegisterForm = new FormGroup({
      LastName: new FormControl('',[Validators.required,Validators.pattern('^[A-Z]{1}[a-z]{2,}$')]),
      FirstName: new FormControl('',[Validators.required,Validators.pattern('^[A-Z]{1}[a-z]{2,}$')]),
      Email:new FormControl('',[Validators.required,Validators.email]),
      Password:new FormControl('',[Validators.required,Validators.pattern('^.*(?=.{8,})(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!*@#$%^&+=]).*$')]),
      ConfirmPassword:new FormControl('',[Validators.required]),
      PhoneNumber:new FormControl('',[Validators.required,Validators.pattern("^[6-9]{1}[0-9]{9}$")]),
      PanNumber:new FormControl('',[Validators.required,Validators.pattern("^[A-Za-z0-9]{10}$")]),
      Address:new FormControl('',[Validators.required,Validators.minLength(4)]),
      City:new FormControl('',[Validators.required,Validators.minLength(4)]),
      State:new FormControl('',[Validators.required,Validators.minLength(4)]),
      ZipCode:new FormControl('',[Validators.required,Validators.pattern("^[0-9]{6}$")])
     });

  }
  Submit()
  {
    const params = {
      FullName:`${this.RegisterForm.value.FirstName} ${this.RegisterForm.value.LastName}`,
      EmailId:this.RegisterForm.value.Email,
      Password:this.RegisterForm.value.Password,
      MobileNumber:this.RegisterForm.value.PhoneNumber,
      PanNumber:this.RegisterForm.value.PanNumber,
      Address:this.RegisterForm.value.Address,
      City:this.RegisterForm.value.City,
      State:this.RegisterForm.value.State,
      ZipCode:this.RegisterForm.value.ZipCode
    }
    console.log(params);
    
    this.userService.RegisterDetails(params).subscribe((res:any)=>{
      console.log("succes");
      this.RegisterForm.reset();
      this.router.navigate(['user/login']);
    });
  }

}
