import { Injectable } from '@angular/core';
import { Room } from '../models/room';
import { BehaviorSubject }    from 'rxjs/BehaviorSubject';

@Injectable()
export class RoomService {

  private currentRoom = new BehaviorSubject<Room>(new Room(''));

  currentRoom$ = this.currentRoom.asObservable();

  load(room: Room) {
    this.currentRoom.next(room);
  }

  reset() {
    this.currentRoom.next(new Room(''));
  }

}
