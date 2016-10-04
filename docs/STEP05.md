# DevdaysChat

## STEP 05 : room toolbar

- cd src/app/chat
- ng g component room-toolbar

1. room-toolbar.ts

```typescript
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
```

2. room-toolbar.html

```html
<div class="toolbar-room" color="primary">

  <div style="float:left">
    <button md-icon-button (click)="goBack()" *ngIf="room?.name?.length > 0">
      <md-icon>keyboard_arrow_left</md-icon>
    </button>
  </div>

  <div class="toolbar-room-title" >
    <span *ngIf="room?.name?.length > 0">{{room?.name}}</span>
  </div>

</div>
```

3. room-toolbar.css

```css

.toolbar-room {
    color: white;
    position: fixed;
    z-index: 1;
    top: 50;
    right: 0;
    left: 0;
    background-color: #ff6600;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    font-family: Roboto, "Helvetica Neue", sans-serif;
}

.toolbar-room-title {
  padding-top: 8px;
  padding-right: 40px;
  text-align: center;
}

```
