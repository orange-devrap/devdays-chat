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

  constructor(private _cs: ChatMessagesService) { }

  ngOnInit() {
    this.messages = this._cs.getMessagesByRoomId(this.roomId);
  }

  trackByKey(index: number, entry: ChatMessage) {
    return entry.$key;
  }

}
