import { Component, Output, EventEmitter } from '@angular/core';
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
  @Output() sidenavToggle: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() themeToggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public userService: UserService, 
            public authService: AuthService, 
            public roomService: RoomService, 
            public router: Router) {
    userService.currentUser$.subscribe(currentUser => this.user = currentUser);
    roomService.currentRoom$.subscribe(currentRoom => this.room = currentRoom);
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

}
