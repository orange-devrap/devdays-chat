import { ChatMessage } from '../../shared/models/chat-message';
import { Component, ChangeDetectionStrategy, OnInit, Input } from '@angular/core';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'ddo-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageComponent implements OnInit {

  @Input() message: ChatMessage;
  author: string;

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.userService.currentUser$.subscribe(user => {
      this.author = user.pseudo;
    });
  }

  isMyMessage(): boolean {
    return this.message.author === this.author;
  }

}
