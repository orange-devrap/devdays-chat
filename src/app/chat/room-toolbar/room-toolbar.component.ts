import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { RoomService } from '../../shared/services/room.service';
import { Room } from '../../shared/models';

@Component({
  selector: 'ddo-room-toolbar',
  templateUrl: './room-toolbar.component.html',
  styleUrls: ['./room-toolbar.component.css']
})
export class RoomToolbarComponent implements OnInit {

  room: Room;

  constructor(public roomService: RoomService, private _location: Location) { }

  ngOnInit() {
    this.roomService.currentRoom$.subscribe(currentRoom => this.room = currentRoom);
  }

  goBack() {
    this._location.back();
  }
}
