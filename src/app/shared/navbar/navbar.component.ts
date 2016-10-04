import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { User } from '../models';

@Component({
  selector: 'ddo-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: User;

  constructor(public userService: UserService,
              public authService: AuthService,
              public router: Router) {
  }

  ngOnInit() {
    this.userService.currentUser$.subscribe(currentUser => this.user = currentUser);
  }

  logout() {
     this.authService.logout();
     this.router.navigate(['/login']);
  }

}
