import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';
import { AuthService } from './shared/services';

@Component({
  selector: 'ddo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(af: AngularFire, public authService: AuthService, public router: Router) {
    af.auth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous,
    })
    .then(auth => {
      // console.log('auth', auth);
    })
    .catch(ex => console.error('ex', ex));

   }

   logout() {
     this.authService.logout();
     this.router.navigate(['/login']);
   }

}
