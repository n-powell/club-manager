import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { MembersComponent }   from './members/members.component';
import { PlayerDetailComponent }   from './player-detail/player-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'members',
    component: MembersComponent
  },
  {
  path: 'players/:id',
  component: PlayerDetailComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
