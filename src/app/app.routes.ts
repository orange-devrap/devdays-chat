import { RoomsComponent } from './room/rooms.component';
// import { ChatComponent } from './chat/chat.component';
import { Routes, RouterModule } from '@angular/router/src';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component';

import { AuthGuardService } from './shared/services';


const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'rooms',
    component: RoomsComponent,
    canActivate: [AuthGuardService]
  }
];

export const appRoutingProviders: any[] = [
  AuthGuardService
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
