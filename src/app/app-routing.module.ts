import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent }      from './landing/landing.component';
import { HomeComponent }      from './home/home.component';
import { NewComponent }      from './new/new.component';
import { ProfileComponent }      from './profile/profile.component';
import { ResultsComponent }      from './results/results.component';
import {ConceptComponent } from './concept/concept.component';
import { HttptestComponent } from './httptest/httptest.component';

const routes: Routes = [

  { path: 'start', component: LandingComponent },
  { path: '', component: HomeComponent},
  { path: 'new', component: NewComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'results/:id', component: ResultsComponent},
  { path: 't', component: HttptestComponent}


];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
