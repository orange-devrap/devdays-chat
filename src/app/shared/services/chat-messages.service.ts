import { ChatMessage } from '../models/chat-message';
import { AngularFire } from 'angularfire2';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChatMessagesService {

  constructor(private _af: AngularFire) { }

  getMessagesByRoomId(roomId: string): Observable<ChatMessage[]> {
    return this._af.database.list(`rooms/${roomId}/messages`, {
      query: {
        limitToLast: 50
      }
    });
  }

  createMessage(roomId: string, newMessage: ChatMessage): Promise<void> {
    return new Promise((resolve) => {
      this._af.database.list(`rooms/${roomId}/messages`)
                       .push(newMessage)
                       .then(() => resolve());
    });
  }

}
