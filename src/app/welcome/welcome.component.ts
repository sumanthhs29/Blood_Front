import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { NgForm } from '@angular/forms';
import { WelcomeService } from './welcome.service';
import { SignupService } from '../signup/signup.service';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

   userInfo:any;
   userNumber :any;
   info = "shashi";

  constructor(private donorSer:WelcomeService,private signinser:SignupService) { }

  ngOnInit() {

   this.userInfo = this.signinser.getUserInfo();
   console.log("welcome ser",this.userInfo.phoneNO);
   this.userNumber = this.userInfo.phoneNO;
   console.log("user Number",this.userNumber);


    $(document).ready(function(){
      $('#cho').css('color','blue');
      $('#dnr_btn').click(function(){
        console.log("check");
        $('#info').hide();
        $('#acc_info').hide();
        $('#donor_card').fadeIn(2000);
        $('#cho').css('color','black');
        $('#don').css('color','red');
      });
      $('#back_btn').click(function(){
        $('#donor_card').hide();
        $('#info').fadeIn(2000);
        $('#acc_info').hide();
        $('#cho').css('color','blue');
        $('#don').css('color','black');
        $('#acc').css('color','black');
      });
      $('#back_btn2').click(function(){
        $('#donor_card').hide();
        $('#info').fadeIn(2000);
        $('#acc_info').hide();
        $('#cho').css('color','blue');
        $('#don').css('color','black');
        $('#acc').css('color','black');
      });
      $('#acc_btn').click(function(){
        $('#info').hide();
        $('#acc_info').fadeIn(2000);
        $('#donor_card').hide();
        $('#cho').css('color','black');
        $('#don').css('color','black');
        $('#acc').css('color','red');
        
      })

    });
    



  }

  donor(formvar:NgForm){
       console.log(formvar.value);
       if(formvar.valid){
        this.donorSer.donorInsert(formvar.value); 
       }
  }
  search(fromvar:NgForm){
    console.log(fromvar);
    this.donorSer.donorget(fromvar.value);
  }

}
