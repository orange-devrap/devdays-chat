import { ChatMessage } from '../../shared/models/chat-message';
import { Component, OnInit, Input } from '@angular/core';

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

  // inject services
  constructor() { }

  ngOnInit() {
    // init author message -> user connected
  }

}
