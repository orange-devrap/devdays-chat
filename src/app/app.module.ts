import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';

// routes
import { routing, appRoutingProviders } from './app.routes';

// components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RoomsComponent } from './room/rooms.component';
import { ChatComponent } from './chat/chat.component';
import { MessagesComponent } from './chat/messages/messages.component';
import { MessageComponent } from './chat/message';
import { MessageFormComponent } from './chat/message-form/message-form.component';

// services
import { ChatMessagesService, UserService, AuthService, RoomService } from './shared/services';
import { RoomToolbarComponent } from './chat/room-toolbar/room-toolbar.component';

// firebase config
const firebaseConfig = {
    apiKey: 'AIzaSyAMoV03Twhvq3cY-YPP3lu6a3CvAKaxe7E',
    authDomain: 'devdays-b57e5.firebaseapp.com',
    databaseURL: 'https://devdays-b57e5.firebaseio.com',
    storageBucket: 'devdays-b57e5.appspot.com'
  };

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent, RoomsComponent, MessagesComponent, MessageComponent,
    ChatComponent, MessageFormComponent, LoginComponent, MessageFormComponent, RoomToolbarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [ appRoutingProviders, ChatMessagesService, UserService, AuthService, RoomService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
