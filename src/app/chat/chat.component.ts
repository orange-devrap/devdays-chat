import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'ddo-chat',
  templateUrl: 'chat.component.html',
  styleUrls: ['chat.component.css']
})
export class ChatComponent {
  roomId: string;
  author: string;

  constructor(private _route: ActivatedRoute, public userService: UserService) {
    userService.currentUser$.subscribe(user => {
      this.author = user.login;
    });
    this.roomId = this._route.snapshot.params['roomId'];
  }
}
