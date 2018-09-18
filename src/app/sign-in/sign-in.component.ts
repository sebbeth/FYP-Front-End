import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SessionService } from '../session.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  email: String;
  password: String;
  busy = false;
  errorMessage: String;

  constructor(private sessionService: SessionService, private router: Router) { }

  ngOnInit() {
  }

 onSubmit() {
       console.log(this.email + " " + this.password);
      this.busy = true;
      let success = this.sessionService.signIn(this.email,this.password);

      if (success) {
         this.router.navigate(['']);
      } else {
        console.log("F");
        this.errorMessage = "Sign in failed :(";
      }
      this.busy = false;
  }

}
