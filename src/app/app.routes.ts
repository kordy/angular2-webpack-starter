import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { TodoComponent } from './todo';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

console.log(TodoComponent);
export const ROUTES: Routes = [
  { path: '', component: TodoComponent },
  // { path: 'home',  component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  // {
  //   path: 'detail', loadChildren: () => System.import('./+detail').then((comp: any) => {
  //     return comp.default;
  //   })
  //   ,
  // },
  // { path: '**',    component: NoContentComponent },
];
