import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';
import { NgForm } from '@angular/forms';
import { SignupService } from '../signup/signup.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginser:LoginService,private signinser:SignupService) { }

  ngOnInit() {

  }

  logIn(formvar:NgForm){
    console.log(formvar.value);
    // this.loginser.updatelogin(formvar.value);
    this.signinser.loginService(formvar.value);

    this.loginser.LoginService(formvar.value);
  }

}
