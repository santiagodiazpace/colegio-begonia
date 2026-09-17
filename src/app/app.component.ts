import { Component, ViewEncapsulation, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  private readonly router = inject(Router);
  menuOpen = false;

  isNavActive(section: string): boolean {
    const url = this.router.parseUrl(this.router.url);
    const path = url.root.children['primary']?.segments.map(segment => segment.path).join('/') ?? '';
    const pageSections: Record<string, string> = {
      'propuesta-institucional': 'institucion',
      'm-rodriguez': 'colegios',
      begonia: 'colegios',
      familias: 'familias',
      calendario: 'familias',
      noticias: 'noticias',
      parroquia: 'parroquia',
    };
    return (path ? pageSections[path] : url.fragment || 'inicio') === section;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  scrollToTop(event: MouseEvent) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
