import { FirebaseListObservable } from 'angularfire2/database';
import { AngularFire } from 'angularfire2';
import { Component, OnInit } from '@angular/core';
import { RoomService } from '../shared/services/room.service';
import { Room } from '../shared/models';

@Component({
  selector: 'ddo-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms: FirebaseListObservable<any>;

  constructor(private _af: AngularFire, public roomService: RoomService) { }

  ngOnInit() {
    this.rooms = this._af.database.list('rooms');
    this.roomService.reset();
  }

  selectRoom(roomName: string) {
    this.roomService.load(new Room(roomName));
  }

}
