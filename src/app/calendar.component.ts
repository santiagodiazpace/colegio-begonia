import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-calendar',
  imports: [RouterLink],
  templateUrl: './calendar.component.html',
})
export class CalendarComponent {
  events = [
    {
      day: '18',
      month: 'SEP',
      year: '2027',
      institution: 'Ambas instituciones',
      title: 'Encuentro de familias',
      time: '18:00 h',
      place: 'Lugar a confirmar',
      detail:
        'Un espacio de encuentro para compartir novedades, proyectos y próximos desafíos de nuestra comunidad educativa.',
    },
    {
      day: '24',
      month: 'SEP',
      year: '2027',
      institution: 'Martín Rodríguez',
      title: 'Muestra anual de proyectos',
      time: '18:00 h',
      place: 'Colegio Martín Rodríguez',
      detail:
        'Estudiantes y docentes presentan los trabajos desarrollados durante el ciclo lectivo junto a sus familias.',
    },
    {
      day: '03',
      month: 'OCT',
      year: '2027',
      institution: 'Nuestra Señora de Begoña',
      title: 'Celebración de la comunidad',
      time: '18:00 h',
      place: 'Colegio Nuestra Señora de Begoña',
      detail:
        'Una jornada para reunirnos, celebrar y fortalecer los vínculos que construimos durante todo el año.',
    },
    {
      day: '15',
      month: 'OCT',
      year: '2027',
      institution: 'Nuestra Señora de Begoña',
      title: 'Feria del libro y la creatividad',
      time: '16:30 h',
      place: 'Salón de actos',
      detail:
        'Una tarde de lecturas, producciones artísticas y propuestas preparadas por estudiantes de todos los niveles.',
    },
    {
      day: '29',
      month: 'OCT',
      year: '2027',
      institution: 'Ambas instituciones',
      title: 'Jornada deportiva y recreativa',
      time: '09:00 h',
      place: 'Predio a confirmar',
      detail:
        'Actividades deportivas y recreativas para compartir en familia y cerrar el mes como comunidad.',
    },
  ];
}
