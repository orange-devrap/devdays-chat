import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ChatMessage } from '../../shared/models/chat-message';
import { ChatMessagesService } from '../../shared/services/chat-messages.service';

@Component({
  selector: 'ddo-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  @Input() roomId: string;

  messages: Observable<ChatMessage[]>;

  constructor(private chatMessageService: ChatMessagesService) { }

  ngOnInit() {
    this.messages = this.chatMessageService.getMessagesByRoomId(this.roomId);
    this.messages.subscribe(msg => {
      if (window.scrollY === 0 || (document.body.scrollHeight - window.scrollY) < 900) {
        setTimeout(() => {
          window.scrollTo(0, document.body.scrollHeight);
        }, 0);
      }
    });
  }

  trackByKey(index: number, entry: ChatMessage) {
    return entry.$key;
  }

}
