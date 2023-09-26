import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {


  isloggedIn: boolean = false

  login() {
    this.isloggedIn = true;
  }

  logOut() {
    this.isloggedIn = false;
  }

  isAuthenticated() {
    return this.isloggedIn
  }
}
