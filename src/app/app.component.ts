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

  isDarkTheme: boolean = false;

  rooms: FirebaseListObservable<any[]>;

  constructor(af: AngularFire, public authService: AuthService,public router: Router) {
    af.auth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous,
    })
    .then(auth => {
      console.log('auth', auth);
      // this.rooms = af.database.list('rooms');
    })
    .catch(ex => console.error('ex', ex));

   }

   themeToggle() {
     this.isDarkTheme = !this.isDarkTheme;
   }

   logout() {
     console.log('logout');
     this.authService.logout();
     this.router.navigate(['/login']);
   }

}
