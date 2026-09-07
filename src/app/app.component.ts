import { Component } from '@angular/core';

@Component({selector:'app-root',imports:[],templateUrl:'./app.component.html',styleUrl:'./app.component.css'})
export class AppComponent {
  menuOpen=false;
  quickLinks=[['assets/iconos/inscripciones.svg','Inscripciones','Fechas, requisitos y preinscripción'],['assets/iconos/pagos.svg','Cuotas','Medios e instrucciones de pago'],['assets/iconos/documentacion.svg','Documentación','Circulares y archivos para descargar'],['assets/iconos/calendario.svg','Calendario','Fechas importantes del ciclo lectivo']];
  levels=[['Guardería','Primeros vínculos, cuidado y descubrimiento.'],['Nivel Inicial','Aprender jugando, explorar y compartir.'],['Nivel Primario','Bases sólidas para crecer con confianza.'],['Nivel Secundario','Herramientas para construir el propio futuro.']];
  news=[['Institucional','12 AGO 2027','Una jornada para encontrarnos y celebrar'],['Begoña · Nivel Primario','08 AGO 2027','Aprender haciendo: nuevos proyectos en el aula'],['Martín Rodríguez · Nivel Secundario','02 AGO 2027','Estudiantes que transforman su comunidad']];
  events=[['18','SEP','Ambas instituciones','Encuentro de familias'],['24','SEP','Martín Rodríguez','Muestra anual de proyectos'],['03','OCT','Nuestra Señora de Begoña','Celebración de la comunidad']];
  toggleMenu(){this.menuOpen=!this.menuOpen} closeMenu(){this.menuOpen=false}
}
