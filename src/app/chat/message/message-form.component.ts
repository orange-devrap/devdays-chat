import { Component, Input, OnInit } from '@angular/core';
import { ChatMessagesService } from '../../shared/services';
import { ChatMessage } from '../../shared/models';
import { UserService } from '../../shared/services/user.service';

class ChatMessageFormModel implements ChatMessage {
  author: string;
  body: string;
}

@Component({
  selector: 'ddo-message-form',
  templateUrl: 'message-form.component.html',
  styleUrls: ['message-form.component.css']
})
export class MessageFormComponent implements OnInit {
  @Input() roomId: string;
  @Input() author: string;

  private chatModel: ChatMessage = new ChatMessageFormModel();

  constructor(public chatMessageService: ChatMessagesService, public userService: UserService) {
  }

  ngOnInit() {
    this.chatModel.author = this.author;
  }

  saveMessage() {
    this.chatMessageService.createNewMessage(this.roomId, <ChatMessage> this.chatModel);
    this.chatModel.body = '';
  }

}
