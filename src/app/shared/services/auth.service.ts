import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';
import { UserService } from './user.service';

@Injectable()
export class AuthService {

  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(public af: AngularFire, public userService: UserService) {

  }

  login(): firebase.Promise<FirebaseAuthState> {
    return this.af.auth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous,
    });
  }

  logout(): void {
    // this.af.auth.logout();
    this.userService.reset();
    this.isLoggedIn = false;
  }
}
