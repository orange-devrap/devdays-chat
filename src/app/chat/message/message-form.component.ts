import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChatMessagesService } from '../../shared/services';
import { ChatMessage } from '../../shared/models';

class ChatMessageFormModel {
  author: string;
  body: string;
}

@Component({
  selector: 'ddo-message-form',
  templateUrl: 'message-form.component.html',
  styleUrls: ['message-form.component.css']
})
export class MessageFormComponent {
  @Input() roomId: string;
  private chatMessageForm: FormGroup;

  constructor(private _fb: FormBuilder, private _cs: ChatMessagesService) { 
    this.chatMessageForm = this._fb.group({
      'author': ['', Validators.required],
      'body': ['', Validators.required]
    });
  }


  saveMessage() {
    if (this.chatMessageForm.valid) {
      this._cs.createNewMessage(this.roomId, <ChatMessage> this.chatMessageForm.value);
      const author = this.chatMessageForm.controls['author'].value;
      this.chatMessageForm.reset();
      this.chatMessageForm.controls['author'].setValue(author);
    }
  }

}
