import { Injectable } from '@angular/core';
import { Account } from './data-structures/account';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor( private cookieService: CookieService) {  }


  public isSignedIn(): boolean {
    if (this.getAccount() == null) {
      return false;
    }
      return true;
  }

  public getAccountId(): number {
    if (this.getAccount() != null) {
      return this.getAccount().id;
    }
    return null;
  }

  public getAccount(): Account {
    if (this.cookieService.get('id') == '') {
      return null;
    }
    if (this.cookieService.get('username') == '') {
      return null;
    }
    if (this.cookieService.get('password') == '') {
      return null;
    }
    let account = new Account();
    account.id = +this.cookieService.get('id');
    account.email = this.cookieService.get('username');
    account.password = this.cookieService.get('password');
    return account;
  }

  public signIn(email,password): boolean {
    if ((email == null) || (password == null) ){
      return false;
    }
    let account = new Account();

    // Hardcoded valid emails
    switch(email) {
      case 'me@sebbrown.net':
      account.id = 6;
        break;
      case 'tester@email.com':
        account.id = 7;
        break;
      case 'bradley@email.com':
        account.id = 8;
        break;
        case 'autotest':
          account.id = 10;
          break;
      }


      if (account.id != null) {
        account.email = email;
        account.password = password;
        this.cookieService.set('id',String(account.id));
        this.cookieService.set('username',account.email);
        this.cookieService.set('password',password);
        return true;
      }

    return false;
  }

  public signOut() {
    // Destroy the account object
    this.cookieService.set('id','');
    this.cookieService.set('username','');
    this.cookieService.set('password','');

  }
}
