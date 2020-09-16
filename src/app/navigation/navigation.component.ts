import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SessionService } from '../session.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  apiMode: number;

  constructor(private dataService: DataService, private sessionService: SessionService,private router: Router) { }

  ngOnInit() {
    this.apiMode = this.getAPIMode();
  }

  setAPIMode(mode): void {
    this.dataService.setAPIMode(mode);
    this.apiMode = this.getAPIMode();
  }

  getAPIMode(): number {
    return this.dataService.getAPIMode();
  }

  getAccountId(): number {
    return this.sessionService.getAccountId();
  }

  isSignedIn(): boolean {
    return this.sessionService.isSignedIn();
  }

  signOut() {
    this.sessionService.signOut();
    this.router.navigate(['']);
  }

  showHome(): boolean {
    if (this.router.url === '/') {
      return false;
    }
    return true;
  }

}
