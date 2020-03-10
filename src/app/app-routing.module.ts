import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

import { AlbumComponent } from './album/album.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
const routes: Routes = [
  /*
  {
    path: '',
    redirectTo: '/albums',
    pathMatch: 'full'
  },
  */
  {
    path: 'albums',
    component: AlbumComponent
  },
  {
    path: 'albums',
    component: NavegacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
