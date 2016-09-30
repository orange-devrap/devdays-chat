import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class UserService {

  private currentUser = new Subject<User>();

  currentUser$ = this.currentUser.asObservable();

  load(user: User) {
    this.currentUser.next(user);
  }

  reset() {
    this.currentUser.next(new User('', '', '', ''));
  }

}
