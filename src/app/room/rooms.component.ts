import { AngularFire } from 'angularfire2';
import { Component, OnInit } from '@angular/core';
import { RoomService } from '../shared/services/room.service';
import { Room } from '../shared/models';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ddo-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms: Observable<Room[]>;

  constructor(private _af: AngularFire, public roomService: RoomService) { }

  ngOnInit() {
    this.rooms = this._af.database.list('rooms');
    this.roomService.reset();
  }

  selectRoom(roomSelected: Room) {
    console.log('select room', roomSelected);
    this.roomService.load(roomSelected);
  }

}
