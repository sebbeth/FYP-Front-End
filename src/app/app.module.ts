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
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { ProfileComponent } from './profile/profile.component';
import { ResultsComponent } from './results/results.component';
import { LineChartComponent } from './results/line-chart/line-chart.component';
import { SelectInputComponent } from './new/select-input/select-input.component';
import { SelectProvidersComponent } from './new/select-providers/select-providers.component';
import { EditSolutionComponent } from './new/edit-solution/edit-solution.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AwaitResultComponent } from './new/await-result/await-result.component';
import { WorkloadsComponent } from './workloads/workloads.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    NewComponent,
    ProfileComponent,
    ResultsComponent,
    LineChartComponent,
    SelectInputComponent,
    SelectProvidersComponent,
    EditSolutionComponent,
    SignInComponent,
    AwaitResultComponent,
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
