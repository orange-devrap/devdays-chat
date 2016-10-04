import { Injectable } from '@angular/core';
import { Room } from '../models/room';
import { BehaviorSubject }    from 'rxjs/BehaviorSubject';

class RoomModel implements Room {
    name: string;
    description: string;
}

@Injectable()
export class RoomService {

  private currentRoom = new BehaviorSubject<Room>(new RoomModel());

  currentRoom$ = this.currentRoom.asObservable();

  load(room: Room) {
    this.currentRoom.next(room);
  }

  reset() {
    this.currentRoom.next(new RoomModel());
  }

}
