import { Component, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.html',
  styleUrls: ['./configuracoes.css']
})
export class Configuracoes {

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  toggleTheme(theme: string): void {
    if (theme === 'light') {
      this.renderer.addClass(this.document.body, 'light-theme');
      // Opcional: Salvar preferência
      localStorage.setItem('theme', 'light');
    } else {
      this.renderer.removeClass(this.document.body, 'light-theme');
      localStorage.setItem('theme', 'dark');
    }
  }
}