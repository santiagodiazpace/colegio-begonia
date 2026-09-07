import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { InstitutionalComponent } from './institutional.component';
import { NewsComponent } from './news.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Unidades Académicas' },
  {
    path: 'propuesta-institucional',
    component: InstitutionalComponent,
    title: 'Propuesta institucional | Unidades Académicas',
  },
  {
    path: 'noticias',
    component: NewsComponent,
    title: 'Noticias | Unidades Académicas',
  },
  { path: '**', redirectTo: '' },
];
