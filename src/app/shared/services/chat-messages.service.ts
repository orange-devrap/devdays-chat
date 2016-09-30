import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFire } from 'angularfire2';
import { ChatMessage } from '../models';

@Injectable()
export class ChatMessagesService {

  constructor(private _af: AngularFire) { }

  getMessagesByRoomId(roomId: string): Observable<ChatMessage[]> {
    return this._af.database.list('rooms/' + roomId + '/messages', {
      query: {
        limitToLast: 50
      }
    });
  }

  createNewMessage(roomId: string, newMessage: ChatMessage): Promise<void> {
    newMessage.created = new Date().toUTCString();
    return new Promise((resolve) => {
      this._af.database.list('rooms/' + roomId + '/messages').push(newMessage).then(() => {
        resolve();
      });
    });
  }

}
