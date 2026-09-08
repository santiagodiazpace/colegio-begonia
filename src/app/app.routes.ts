import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { InstitutionalComponent } from './institutional.component';
import { NewsComponent } from './news.component';
import { CalendarComponent } from './calendar.component';
import { ParishComponent } from './parish.component';
import { MartinRodriguezComponent } from './martin-rodriguez.component';

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
  {
    path: 'calendario',
    component: CalendarComponent,
    title: 'Calendario | Unidades Académicas',
  },
  {
    path: 'parroquia',
    component: ParishComponent,
    title: 'Parroquia | Unidades Académicas',
  },
  {
    path: 'm-rodriguez',
    component: MartinRodriguezComponent,
    title: 'Colegio Martín Rodríguez | Unidades Académicas',
  },
  { path: '**', redirectTo: '' },
];
