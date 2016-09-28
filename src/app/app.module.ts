import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { AppComponent } from './app.component';
import { RoomsComponent } from './room/rooms/rooms.component';
import { MessagesComponent } from './chat/messages/messages.component';
import { MessageComponent } from './chat/message/message.component';

const firebaseConfig = {
    apiKey: 'AIzaSyAMoV03Twhvq3cY-YPP3lu6a3CvAKaxe7E',
    authDomain: 'devdays-b57e5.firebaseapp.com',
    databaseURL: 'https://devdays-b57e5.firebaseio.com',
    storageBucket: 'devdays-b57e5.appspot.com'
  };

const myFirebaseAuthConfig = {
  provider: AuthProviders.Anonymous,
  method: AuthMethods.Anonymous
};

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, RoomsComponent, MessagesComponent, MessageComponent
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
