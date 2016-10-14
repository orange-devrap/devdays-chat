# DevdaysChat

## STEP 01

### créer chat component
- cd src/app
- ng g component chat

### router
- add route dans app.routes : s1-route
- add routerLink dans rooms.component.html : [routerLink]="['/rooms', room.$key, 'chat']"

### chat component

1. chat.component.ts

```typescript
export class ChatComponent {
  roomId: string;

  constructor(private _route: ActivatedRoute) {
    this.roomId = this._route.snapshot.params['roomId'];
  }
}
```

2. chat.component.html

```html
<section class="container">

  <ddo-messages [roomId]="roomId"></ddo-messages>

  <div class="fixed">
    <ddo-message-form [roomId]="roomId"></ddo-message-form>
  </div>

</section>
```

2. chat.component.css

```css
.container {
  background-color: #f2f2f2;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.fixed {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
```

