# DevdaysChat

## STEP 02 : messages

### ChatMessageService

- cd src/app/shared/services
- ng g service chatMessage

1. add method getMessagesByRoomId
2. call af. database.list

```typescript
  getMessagesByRoomId(roomId: string): Observable<ChatMessage[]> {
    return this._af.database.list(`rooms/${roomId}/messages`, {
      query: {
        limitToLast: 50
      }
    });
  }
``` 

### component : messages
- cd src/app/chat
- ng g component messages

1. messages.component.ts :

```typescript
  @Input() roomId: string;
  messages: Observable<ChatMessage[]>;

  constructor(private chatMessagesService: ChatMessagesService) { }

  ngOnInit() {
    this.messages = this.chatMessagesService.getMessagesByRoomId(this.roomId);
  }
```

2. messages.component.html

```html
<section class="message-list-container">
  <div *ngFor="let message of (messages | async)">
    <md-card>
      <md-card-title>{{ message.author}} - {{ message.created | date : 'dd/MM/yy HH:mm'}}</md-card-title>
      <md-card-content>{{ message.body}}</md-card-content>
    </md-card>
  </div>
  <div *ngIf="(messages | async)?.length < 1">
    <md-spinner class="app-spinner"></md-spinner>
  </div>
</section>
```

2. messages.component.css

```css
.message-list-container {
  margin: 16px 16px 200px 16px;
}

md-spinner {
  margin:auto;
}
```
