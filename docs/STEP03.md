# DevdaysChat

## STEP 03 : message

### component : message
- cd src/app/chat
- ng g component message

1. message.component.ts :

```typescript
  @Input() message: ChatMessage;
  author: string;

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.userService.currentUser$.subscribe(user => {
      this.author = user.pseudo;
    });
  }

  isMyMessage(): boolean {
    return this.message.author === this.author;
  }
```

2. message.component.html

```html
<md-card class="message-card" [ngClass]="{ 'my-message' : isMyMessage() }">
  <md-card-title>
    <div>
      <span class="message-author"><small>{{ message.author }}</small></span>
      <span class="message-date"><small>{{ message.created | date:'dd/MM/yy HH:mm' }}</small></span>
    </div>
  </md-card-title>
  <md-card-content>
    {{ message.body}}
  </md-card-content>
</md-card>
```

3. message.component.css

```css
md-card {
  margin-bottom: 15px;
}

md-card.my-message {
  background-color: #4BB4E6;
}

md-card.my-message .message-author {
  color:white;
}

md-card-title {
  font-size:20px;
}

md-card-content {
  font-size:15px;
}

.message-date {
  float:right;
  font-size: medium;
}

.message-author {
  color: #4BB4E6;
}
```


4. insert into messages.component.html

```html
<section class="message-list-container">

  <div *ngFor="let msg of (messages | async); trackBy: trackByKey;">
    <ddo-message  [message]="msg"></ddo-message>
  </div>

  <div *ngIf="(messages | async)?.length < 1">
    <md-spinner class="app-spinner"></md-spinner>
  </div>
  
</section>
```
