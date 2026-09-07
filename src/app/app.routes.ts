import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { InstitutionalComponent } from './institutional.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Unidades Académicas' },
  {
    path: 'propuesta-institucional',
    component: InstitutionalComponent,
    title: 'Propuesta institucional | Unidades Académicas',
  },
  { path: '**', redirectTo: '' },
];
