import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent }      from './landing/landing.component';
import { HomeComponent }      from './home/home.component';
import { NewComponent }      from './new/new.component';
import { ProfileComponent }      from './profile/profile.component';
import { ResultsComponent }      from './results/results.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { WorkloadsComponent } from './workloads/workloads.component';
import { AboutComponent } from './about/about.component';
import { CanActivateGuard } from './can-activate.guard';

const routes: Routes = [

  { path: '', component: HomeComponent},
  { path: 'new', component: NewComponent, canActivate: [CanActivateGuard]},
  { path: 'about', component: AboutComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [CanActivateGuard]},
  { path: 'workloads/:id', component: WorkloadsComponent, canActivate: [CanActivateGuard]},
  { path: 'results/:id', component: ResultsComponent, canActivate: [CanActivateGuard]},
  { path: 'sign-in', component: SignInComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ CanActivateGuard ]
})
export class AppRoutingModule {}
