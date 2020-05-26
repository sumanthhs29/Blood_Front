import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WelcomeService {
  private donor:any;

  constructor(private router:Router,private http:HttpClient) { }

  donorInsert(donor:any){
    this.http.post("http://localhost:1025/donors/donor",donor).subscribe((responsedata)=>{
      console.log(responsedata);
      if(responsedata['status'] == 'success'){
        alert('you profile has been registered');
        this.router.navigate(['/welcome']);
      }
      if(responsedata['status'] == 'already'){
        alert('this phone number is already registered');
        this.router.navigate(['/welcome']);

      }
    })
  }

  donorget(donor:any){
    this.http.post("http://localhost:1025/donors/acceptor",donor).subscribe((response) =>{
      console.log(response);
      if(response['status'] == 'success'){
        this.donor = response['data'];
        console.log("donor",this.donor[0]);
        this.router.navigate(['/search']);
      }
      
    })
  }

  getDonorDetails(){
    return this.donor;
  }
}
