import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/models';

@Component({
  selector: 'ddo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: User = new User('', '', '', '');

  constructor(public authService: AuthService, public router: Router, public userService: UserService) {
  }

  loginUser() {
    this.authService.login()
      .then(auth => {

        // console.log('loginUser auth', auth);

        // store current user
        let userAuthenticated = new User(auth.uid, this.user.login, this.user.firstname, this.user.lastname);
        this.userService.load(userAuthenticated);
        this.authService.isLoggedIn = true;

        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/rooms';
        // Redirect the user
        this.router.navigate([redirect]);

      })
      .catch(ex => console.error('ex', ex));
  }

  reset() {
    this.user = new User('', '', '', '');
  }

  logout() {
    this.authService.logout();
  }

}
