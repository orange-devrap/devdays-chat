# DevdaysChat

## STEP 04 : message form

### ChatMessageService : create message



### component : message-form
- cd src/app/chat
- ng g component message-form

1. message-form.component.ts :

```typescript
class ChatMessageFormModel implements ChatMessage {
  author: string;
  body: string;
}

@Component({
  selector: 'ddo-message-form',
  templateUrl: 'message-form.component.html',
  styleUrls: ['message-form.component.css']
})
export class MessageFormComponent implements OnInit {
  @Input() roomId: string;
  @Input() author: string;

  private chatModel: ChatMessage = new ChatMessageFormModel();

  constructor(public chatMessageService: ChatMessagesService, public userService: UserService) {
  }

  ngOnInit() {
    this.chatModel.author = this.author;
  }

  saveMessage() {
    this.chatMessageService.createNewMessage(this.roomId, <ChatMessage> this.chatModel);
    this.chatModel.body = '';
  }
}
```

2. message-form.component.html

```html
<md-card>
  <md-card-content>
    <form (ngSubmit)="saveMessage()"  #messageForm="ngForm">
      <p><textarea [(ngModel)]="chatModel.body" name="body" required></textarea></p>
      <div>
        <button md-raised-button color="primary" type="submit" [disabled]="!messageForm.form.valid">Send</button>
      </div>
    </form>
  </md-card-content>
</md-card>
```

3. message-form.component.css

```css
md-card {
    padding: 10px 15px;
}

textarea {
  width: 100%;
  border: 1px #9e9e9e solid;
  display: block;
  resize: vertical;
  font-family: Roboto, "Helvetica Neue", sans-serif;
  font-size: 18px;
  margin-bottom: 5px;
}

div {
  width:100%;
  text-align:right;
}
```

4. insert into chat.component.html
```html

<section class="room-toolbar">
  <ddo-room-toolbar></ddo-room-toolbar>
</section>

<section class="container">

  <ddo-messages [roomId]="roomId"></ddo-messages>

  <div class="fixed">
    <ddo-message-form [author]="author" [roomId]="roomId"></ddo-message-form>
  </div>

</section>
```
