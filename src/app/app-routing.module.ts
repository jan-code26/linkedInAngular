import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './onboarding/login/login.component';
import { WelcomeComponent } from './user/welcome/welcome.component';
import {SignupComponent} from "./onboarding/signup/signup.component";
import {RegisterComponent} from "./user/register/register.component";
import {AddressComponent} from "./user/address/address.component";
import {EducationComponent} from "./user/education/education.component";
import {ExperienceComponent} from "./user/experience/experience.component";
import {SkillsComponent} from "./user/skills/skills.component";
import {EditComponent} from "./user/edit/edit.component";
import {CommonComponent} from "./onboarding/common/common.component";


const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {path:'signup',component:SignupComponent},
  {path:'register/:id',component:RegisterComponent},
  {path:'address/:id/:id2',component:AddressComponent},
  {path:'education/:id/:id2',component:EducationComponent},
  {path:'experience/:id/:id2',component:ExperienceComponent},
  {path:'skills/:id/:id2',component:SkillsComponent},
  { path: 'welcome/:id', component: WelcomeComponent },
  { path: 'edit/:id', component: EditComponent },
  {path:'common',component:CommonComponent},


  // otherwise redirect to home
  { path: '**', redirectTo: 'login' }
  ];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }
