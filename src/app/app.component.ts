import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  rooms: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    af.auth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous,
    })
    .then(auth => {
      console.log('auth', auth);
      this.rooms = af.database.list('rooms');
    })
    .catch(ex => console.error('ex', ex));

   }

}
