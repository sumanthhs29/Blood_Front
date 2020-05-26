import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
//import {} from ''

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private userInfo:any;

  constructor(private http:HttpClient,private router:Router,private loginser:LoginService) { }

  signUpService(user:any){
    this.userInfo = user;
    console.log("userinfo",this.userInfo);
    this.http.post("http://localhost:1025/auth/checksignin",user).subscribe((responsedata)=>{
      console.log(responsedata);
      if(responsedata['status'] == 'notfound'){
        
        this.http.post("http://localhost:1025/auth/signup",user).subscribe((responsedata)=>{
      console.log(responsedata);
      if(responsedata['status'] == 'success'){
        
        this.router.navigate(['/welcome']);
      }
    })
      }else{
        alert("phone number is already registered");
      }
    })
  }

  loginService(user:any){
    console.log("login");
    this.userInfo = user;
  }

  updateuserInfo(){
    this.getUserInfo = this.loginser.getLogin();
  }

  getUserInfo(){
    return this.userInfo;
  }

}
