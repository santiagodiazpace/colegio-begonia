import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-news',
  imports: [RouterLink],
  templateUrl: './news.component.html',
})
export class NewsComponent {
  news = [
    {
      category: 'Institucional',
      date: '12 AGO 2027',
      title: 'Una jornada para encontrarnos y celebrar',
      summary:
        'Compartimos una nueva experiencia junto a estudiantes, docentes y familias de nuestra comunidad.',
    },
    {
      category: 'Begoña · Nivel Primario',
      date: '08 AGO 2027',
      title: 'Aprender haciendo: nuevos proyectos en el aula',
      summary:
        'Propuestas que invitan a investigar, crear y construir aprendizajes significativos en equipo.',
    },
    {
      category: 'Martín Rodríguez · Nivel Secundario',
      date: '02 AGO 2027',
      title: 'Estudiantes que transforman su comunidad',
      summary:
        'Iniciativas que fortalecen el compromiso, la participación y el vínculo con nuestra ciudad.',
    },
    {
      category: 'Begoña · Nivel Inicial',
      date: '28 JUL 2027',
      title: 'Aprender, jugar y compartir en comunidad',
      summary:
        'Una jornada llena de propuestas creativas para descubrir, expresarse y crecer junto a otros.',
    },
  ];
}
