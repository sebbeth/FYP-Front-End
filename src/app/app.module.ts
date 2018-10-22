import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/Rx';
//import { Router } from '@angular/router';
//import { ActivatedRoute } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
//import { Headers, Response, Http, RequestOptions, URLSearchParams } from "@angular/http"
import { ChartsModule } from 'ng2-charts';
import { CookieService } from 'ngx-cookie-service';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { DataService } from './data.service';
import { SessionService } from './session.service';
import { LandingComponent } from './landing/landing.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ConceptComponent } from './concept/concept.component';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { ProfileComponent } from './profile/profile.component';
import { ResultsComponent } from './results/results.component';
import { HttptestComponent } from './httptest/httptest.component';
import { LineChartComponent } from './results/line-chart/line-chart.component';
import { SelectInputComponent } from './new/select-input/select-input.component';
import { SelectProvidersComponent } from './new/select-providers/select-providers.component';
import { EditInputSetComponent } from './edit-input-set/edit-input-set.component';
import { EditSolutionComponent } from './edit-solution/edit-solution.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AwaitResultComponent } from './new/await-result/await-result.component';
import { CustomSolutionsComponent } from './custom-solutions/custom-solutions.component';
import { WorkloadsComponent } from './workloads/workloads.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavigationComponent,
    ConceptComponent,
    HomeComponent,
    NewComponent,
    ProfileComponent,
    ResultsComponent,
    LineChartComponent,
    HttptestComponent,
    SelectInputComponent,
    SelectProvidersComponent,
    EditInputSetComponent,
    EditSolutionComponent,
    SignInComponent,
    AwaitResultComponent,
    CustomSolutionsComponent,
    WorkloadsComponent,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    HttpClientModule,
    NgbModule.forRoot(),

  ],
  providers: [DataService,SessionService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
