import { ChatMessagesService, UserService, AuthService, RoomService } from './shared/services';
import { ChatComponent } from './chat/chat.component';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { routing, appRoutingProviders } from './app.routes';

import { AngularFireModule } from 'angularfire2';
// import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { AppComponent } from './app.component';
import { RoomsComponent } from './room/rooms.component';
import { MessagesComponent } from './chat/messages/messages.component';
import { MessageComponent, MessageFormComponent } from './chat/message';
import { LoginComponent } from './login/login.component';

const firebaseConfig = {
    apiKey: 'AIzaSyAMoV03Twhvq3cY-YPP3lu6a3CvAKaxe7E',
    authDomain: 'devdays-b57e5.firebaseapp.com',
    databaseURL: 'https://devdays-b57e5.firebaseio.com',
    storageBucket: 'devdays-b57e5.appspot.com'
  };

// const myFirebaseAuthConfig = {
//   provider: AuthProviders.Anonymous,
//   method: AuthMethods.Anonymous
// };

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent, RoomsComponent, MessagesComponent, MessageComponent,
    ChatComponent, MessageFormComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig)
    // AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [ appRoutingProviders, ChatMessagesService, UserService, AuthService, RoomService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
