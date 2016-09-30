import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models';

@Component({
  selector: 'ddo-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent {

  user: User;
  @Output() sidenavToggle: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() themeToggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public userService: UserService) {
    userService.currentUser$.subscribe(currentUser => this.user = currentUser);
  }

  theme($event) {
    console.log($event);
    this.themeToggle.emit(true);
  }

}
