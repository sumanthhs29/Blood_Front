import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    private userInfo:any;
  constructor(private http:HttpClient,private router:Router) { }

  
  getLogin(){
    return this.userInfo;
  }

  LoginService(user:any){
    console.log("user",user);
    
    this.http.post('http://localhost:1025/auth/login',user).subscribe((responseData) => {    //linking front-end 
      console.log("Resuly ::");
      if(responseData["status"] == "success"){
        this.userInfo = responseData['status'];
        this.router.navigate(['/welcome']);
          
      }else{
        alert("invalid phone number");
      }
    });
  }
}
