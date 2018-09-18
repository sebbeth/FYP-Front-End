import { Component, OnInit } from '@angular/core';
import { Account } from '../data-structures/account';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  account: Account;
  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    this.account = this.sessionService.getAccount();
  }



}
