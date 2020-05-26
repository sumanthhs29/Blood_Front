import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './signup/home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SearchComponent } from './search/search.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [ 
   {path: '',component:SignupComponent},
  {path: 'login',component:LoginComponent},
{path:'home',component:WelcomeComponent},
{path:'welcome',component:HomeComponent},
{path:'search',component:SearchComponent},
{path:'help',component:HelpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
