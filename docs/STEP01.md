# DevdaysChat

## STEP 01
Objectifs :
1. créer le composant `chat.component` qui contient les 2 zones d'affichage:
- liste des messages
- formulaire du message à envoyer

2. router la sélection d'une room vers ce composant `chat.component`

### créer chat component
- cd src/app
- ng g component chat


### router
1. app.routes.ts
- add route dans app.routes

```typescript
import { ChatComponent } from './chat/chat.component';
const appRoutes: Routes = [
  ...,
  {
    path: 'rooms/:roomId/chat',
    component: ChatComponent
  }
];
```

2. rooms.component.html
- add routerLink dans rooms.component.html : [routerLink]="['/rooms', room.$key, 'chat']"

```html
  <button md-mini-fab color="primary" [routerLink]="['/rooms', room.$key, 'chat']" (click)="selectRoom(room)">
    <md-icon class="md-24">comment</md-icon>
  </button>
```


### chat component 

1. chat.component.html

```html
<section class="container">

  <div>TODO liste messages</div>

  <div class="fixed">

    <div>TODO message form</div>

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


# RESULT
![step01](./step01.png)