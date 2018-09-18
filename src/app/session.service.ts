import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  accountId = 1;
  signedIn = false;

  constructor() { }


  public isSignedIn(): boolean {
    return this.signedIn;
  }


  public getAccountId(): number {
    return this.accountId;
  }

  public signIn(email,password): boolean {
    if (email == 's@s.com') {
      this.accountId = 7;
      this.signedIn = true;
      return true;
    }
    return false;
  }


  public signOut() {

  }
}
