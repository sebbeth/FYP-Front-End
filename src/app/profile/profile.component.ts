import { Component, OnInit } from '@angular/core';
import { Account } from '../data-structures/account';
import { SessionService } from '../session.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  account: Account;
  test: Object;
  busy: boolean = false;
  
  constructor(private sessionService: SessionService, private dataService: DataService) { }

  ngOnInit() {
    this.account = this.sessionService.getAccount();
  }



}
