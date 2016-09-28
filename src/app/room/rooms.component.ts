import { FirebaseListObservable } from 'angularfire2/database';
import { AngularFire } from 'angularfire2';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ddo-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms: FirebaseListObservable<any>;

  constructor(private _af: AngularFire) { }

  ngOnInit() {
    this.rooms = this._af.database.list('rooms');
  }


}
