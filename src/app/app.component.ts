import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'ddo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(af: AngularFire) {
    af.auth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous,
    })
    .then(auth => { // console.log('auth', auth);
    })
    .catch(ex => console.error('ex', ex));

   }

}
