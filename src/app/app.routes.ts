import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../app/libs/layouts/sidemenu/sidemenu.component').then(
        (m) => m.SidemenuComponent
      ),
  },
];
