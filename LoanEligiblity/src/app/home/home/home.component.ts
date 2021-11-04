import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  FullName:string = JSON.parse((localStorage.getItem('loanUserDetails'))!).fullName;
  EmailId:string = JSON.parse((localStorage.getItem('loanUserDetails'))!).emailId;

  constructor(private router:Router,) { }

  ngOnInit(): void {
    
  }

}
