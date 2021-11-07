import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserHttpService } from '../userHttp/user-http.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserHttpService,private router:Router) { }
  LoginForm!:FormGroup
  get f() { return this.LoginForm.controls; }
  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      Email:new FormControl('',[Validators.required,Validators.email]),
      Password:new FormControl('',[Validators.required,Validators.pattern('^.*(?=.{8,})(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!*@#$%^&+=]).*$')])
     });
  }
  Login()
  {
    const params = {
      EmailId:this.LoginForm.value.Email,
      Password:this.LoginForm.value.Password
      
    }
    console.log(params);
    
    this.userService.Login(params).subscribe((res:any)=>
    {
      console.log("success");
      localStorage.setItem('loanUserDetails',JSON.stringify(res.data));
      this.LoginForm.reset();
      this.router.navigate(['home/dashboard']);
    });
  }

}
