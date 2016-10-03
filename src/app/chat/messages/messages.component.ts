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
  private isTop: boolean = true;

  messages: Observable<ChatMessage[]>;

  constructor(private chatMessageService: ChatMessagesService) { }

  ngOnInit() {
    this.messages = this.chatMessageService.getMessagesByRoomId(this.roomId);
  }

  trackByKey(index: number, entry: ChatMessage) {
    return entry.$key;
  }

  scrollToBottom(): void {
    if (this.isTop) {
      setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight);
      }, 0);
      this.isTop = false;
    }
  }

}
