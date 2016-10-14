import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { RoomService } from '../services/room.service';
import { AuthService } from '../services/auth.service';
import { User, Room } from '../models';

@Component({
  selector: 'ddo-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent {

  user: User;
  room: Room;

  constructor(public userService: UserService,
            public authService: AuthService,
            public roomService: RoomService,
            private _location: Location,
            public router: Router) {
    userService.currentUser$.subscribe(currentUser => this.user = currentUser);
    roomService.currentRoom$.subscribe(currentRoom => this.room = currentRoom);
  }

  goToRooms() {
    this.router.navigate(['/rooms']);
  }

  logout() {
     this.authService.logout();
     this.router.navigate(['/login']);
  }

  goBack() {
    this._location.back();
  }

}
