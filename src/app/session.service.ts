import { Injectable } from '@angular/core';
import { Account } from './data-structures/account';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  account: Account;
  signedIn = false;
  val = 0;

  constructor() {  }


  public isSignedIn(): boolean {
    return this.signedIn;
  }

  public foo(): number {
    this.val++;
    return this.val;
  }

  public getAccountId(): number {
    return this.account.id;
  }

  public getAccount(): Account {

    return this.account;
  }

  public signIn(email,password): boolean {
    if (email == 'me@sebbrown.net') {
      this.account = new Account();
      this.account.id = 1;
      this.account.email = email;
      this.signedIn = true;
      return true;
    }
    return false;
  }


  public signOut() {
    // Destroy the account object
    this.account = null;
    this.signedIn = false;

  }
}
