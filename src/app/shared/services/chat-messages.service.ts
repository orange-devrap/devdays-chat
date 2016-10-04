import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFire } from 'angularfire2';
import { ChatMessage } from '../models';
import { UserService } from './user.service';

@Injectable()
export class ChatMessagesService {

  constructor(private _af: AngularFire, private userService: UserService) { }

  getMessagesByRoomId(roomId: string): Observable<ChatMessage[]> {
    return this._af.database.list('rooms/' + roomId + '/messages', {
      query: {
        limitToLast: 50
      }
    });
  }

  createNewMessage(roomId: string, newMessage: ChatMessage): Promise<void> {
    newMessage.author = this.userService.getUser().pseudo;
    newMessage.created = new Date().toUTCString();
    return new Promise((resolve) => {
      this._af.database.list('rooms/' + roomId + '/messages').push(newMessage).then(() => {
        resolve();
      });
    });
  }

}
