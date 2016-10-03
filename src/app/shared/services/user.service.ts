import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { BehaviorSubject }    from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {

  private currentUser = new BehaviorSubject<User>(new User());

  currentUser$ = this.currentUser.asObservable();

  load(user: User) {
    this.currentUser.next(user);
  }

  reset() {
    this.currentUser.next(new User());
  }

}
