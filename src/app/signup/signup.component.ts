import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SignupService} from './signup.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router,private signupser:SignupService) { }

  ngOnInit() {
    $(document).ready(function(){
      $('#pass_match').keyup(function(){
        console.log($(this).val());
        console.log($('#psw').val());
        if($(this).val() === $('#psw').val()){
          $('#pass_text').hide();
        }else{
          $('#pass_text').show();
        }
        
      });
    });
  }
  
  signUp(formvar:NgForm){
    console.log(formvar.value);
    if(formvar.valid){
      this.signupser.signUpService(formvar.value);
    }else{
      alert("invalid form");
    }
    

  }

}
