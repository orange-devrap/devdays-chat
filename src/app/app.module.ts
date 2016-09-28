import { ChatMessagesService } from './shared/services/chat-messages.service';
import { ChatComponent } from './chat/chat.component';
import { RouterModule } from '@angular/router/src';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { AppComponent } from './app.component';
import { RoomsComponent } from './room/rooms.component';
import { MessagesComponent } from './chat/messages/messages.component';
import { MessageComponent, MessageFormComponent } from './chat/message';

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
    AppComponent, NavbarComponent, RoomsComponent, MessagesComponent, MessageComponent, ChatComponent, MessageFormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: RoomsComponent
      },
      {
        path: 'rooms',
        component: RoomsComponent
      },
      {
        path: 'rooms/:roomId/chat',
        component: ChatComponent
      }
    ]),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [ ChatMessagesService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
