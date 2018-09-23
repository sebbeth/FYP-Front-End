import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent }      from './landing/landing.component';
import { HomeComponent }      from './home/home.component';
import { NewComponent }      from './new/new.component';
import { ProfileComponent }      from './profile/profile.component';
import { ResultsComponent }      from './results/results.component';
import {ConceptComponent } from './concept/concept.component';
import { HttptestComponent } from './httptest/httptest.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CustomSolutionsComponent} from './custom-solutions/custom-solutions.component';
import { CanActivateGuard } from './can-activate.guard';

const routes: Routes = [

  { path: 'start', component: LandingComponent },
  { path: '', component: HomeComponent},
/*  { path: 'new', component: NewComponent, canActivate: [
      CanActivateGuard
    ],},*/
    { path: 'new', component: NewComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'results/:id', component: ResultsComponent},
  { path: 'sign-in', component: SignInComponent},
  { path: 'my-resources', component: CustomSolutionsComponent},
  { path: 't', component: HttptestComponent}


];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ CanActivateGuard ]
})
export class AppRoutingModule {}
