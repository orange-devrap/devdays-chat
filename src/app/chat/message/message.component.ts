import { ChatMessage } from '../../shared/models/chat-message';
import { Component, ChangeDetectionStrategy, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ddo-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageComponent implements OnInit {

  @Input() message: ChatMessage;

  constructor() { }

  ngOnInit() {
  }

}
