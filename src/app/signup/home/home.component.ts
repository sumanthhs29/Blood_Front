import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function(){
      var c = 0;
      setInterval(function(){
          console.log("hello");
          c = c + 1;
          if(c%2==0){
              $('.img1').css('margin-top','+2px');
              $('.img1').css('margin-top','+2px');
              $('.img1').css('margin-top','+2px');
              $('.img1').css('margin-top','+2px');
              
              $('.img2').css('margin-top','-2px');
              $('.img3').css('margin-top','+2px');
              $('.img4').css('margin-top','-2px');
              $('#logo').css('height','35px').css('width','35px');
          }else{
            $('#logo').css('height','30px').css('width','30px');
            $('.img1').css('margin-top','-2px');
            $('.img2').css('margin-top','+2px');

$('.img3').css('margin-top','-2px');
            $('.img4').css('margin-top','+2px');
            
          }
      },500);
      $('.btn').css('color','white');
      $('.btn').mousemove(function(){
          console.log('hello');
          $(this).css('background-color','white').css('color','black');
      });
      $('.btn').mouseout(function(){
          console.log('hello');
          $(this).css('background-color','red').css('border','3px solid white').css('color','white');
      });
      $('#fi').mousemove(function(){
        console.log('first');
        $('#mob_img1').show();
        $('#mob_img2').hide();
        $('#mob_img3').hide();
        $('#mob_img4').hide();
    });
    $('#se').mousemove(function(){
        console.log('second');
        $('#mob_img2').show();
        $('#mob_img1').hide();
        $('#mob_img3').hide();
        $('#mob_img4').hide();
    });
    $('#th').mousemove(function(){
        console.log('third');
        $('#mob_img3').show();
        $('#mob_img2').hide();
        $('#mob_img1').hide();
        $('#mob_img4').hide();
    });
    $('#fo').mousemove(function(){
        console.log('fourth');
        $('#mob_img4').show();
        $('#mob_img2').hide();
        $('#mob_img3').hide();
        $('#mob_img1').hide();
    });
    });

  }

}
