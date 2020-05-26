// import { Component, OnInit } from '@angular/core';
// import { WelcomeService } from '../welcome/welcome.service';



// @Component({
//   selector: 'app-search',
//   templateUrl: './search.component.html',
//   styleUrls: ['./search.component.scss']
// })
// export class SearchComponent implements OnInit {
//   donordisplay:any[] = [];
//   constructor(private welcomeservice:WelcomeService) { }

//   ngOnInit() {
//     this.donordisplay = this.welcomeservice.getDonorDetails();
//     console.log("search",this.donordisplay);
//   }

import { Component,OnInit } from '@angular/core';
import { WelcomeService } from '../welcome/welcome.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-search',
   templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [

    // Trigger animation cards array
    trigger('cardAnimation', [
      // Transition from any state to any state
      transition('* => *', [
        // Initially the all cards are not visible
        query(':enter', style({ opacity: 0 }), { optional: true }),

        // Each card will appear sequentially with the delay of 300ms
        query(':enter', stagger('300ms', [
          animate('.5s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-50%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(-10px) scale(1.1)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
          ]))]), { optional: true }),

       
      ]),
    ]),
   
  ]
})
export class SearchComponent implements OnInit {
     cards:any[] = [];
     index =9;
     constructor(private welcomeservice:WelcomeService) { }
  
     ngOnInit() {
       this.cards = this.welcomeservice.getDonorDetails();
       console.log("search",this.cards);
     }
     deleteCard(i) {
      this.cards.splice(i, 1);
    }

  
}