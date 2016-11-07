import { ChatMessage } from '../../shared/models/chat-message';
import { Component, OnInit, Input } from '@angular/core';
import { ChatMessagesService, UserService } from '../../shared/services';

// internal class to form model
class ChatMessageFormModel implements ChatMessage {
  author: string;
  body: string;
  created?: string;
}

@Component({
  selector: 'ddo-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {

  // input property
  @Input() roomId: string;

  // initialize message model (with constructor)
  message: ChatMessageFormModel = new ChatMessageFormModel();

  // inject services
  constructor(private chatMessagesService: ChatMessagesService,
              private userService: UserService) { }

  ngOnInit() {
    // init author message -> user connected
    this.message.author = this.userService.getUser().pseudo;
  }

  saveMessage() {
    // init date to send message
    this.message.created = new Date().toUTCString();
    // call service to send message
    this.chatMessagesService.createMessage(this.roomId, this.message)
                            .then(() => this.message.body = '');
  }

}
