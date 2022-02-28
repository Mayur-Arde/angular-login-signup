import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { HomeComponent } from './components/home/home.component';


const routes : Routes =[
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent,
  },
  {
    path: 'sign-up',
    component: SignupComponent
  },
  {
    path: 'login',
    component: SigninComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
