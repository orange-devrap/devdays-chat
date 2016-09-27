import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';

const firebaseConfig = {
    apiKey: 'AIzaSyAMoV03Twhvq3cY-YPP3lu6a3CvAKaxe7E',
    authDomain: 'devdays-b57e5.firebaseapp.com',
    databaseURL: 'https://devdays-b57e5.firebaseio.com',
    storageBucket: 'devdays-b57e5.appspot.com'
  };
    // messagingSenderId: '805009878762'
const myFirebaseAuthConfig = {
  provider: AuthProviders.Anonymous,
  method: AuthMethods.Anonymous
};

@NgModule({
  declarations: [
    AppComponent, NavbarComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
