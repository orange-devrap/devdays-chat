import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
// import { RoomService } from '../services/room.service';
import { AuthService } from '../services/auth.service';
import { User } from '../models';

@Component({
  selector: 'ddo-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: User;
  // room: Room;
  @Output() sidenavToggle: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() themeToggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public userService: UserService, 
            public authService: AuthService, 
            // public roomService: RoomService, 
            private _location: Location,
            public router: Router) {
    // roomService.currentRoom$.subscribe(currentRoom => this.room = currentRoom);
  }

  ngOnInit() {
    this.userService.currentUser$.subscribe(currentUser => this.user = currentUser);
    // this.roomService.currentRoom$.subscribe(currentRoom => this.room = currentRoom);
  }

  theme($event) {
    this.themeToggle.emit(true);
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
