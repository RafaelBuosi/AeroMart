import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  isDarkMode: boolean;

  constructor(
    private themeService: ThemeService,
    private renderer: Renderer2
  ) {
    this.isDarkMode = this.themeService.isDark();
    this.applyThemeClass();
  }

  toggleTheme() {
    this.isDarkMode = this.themeService.toggleTheme();
    this.applyThemeClass();
  }

  private applyThemeClass() {
    if (this.isDarkMode) {
      this.renderer.addClass(document.body, 'dark-theme');
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
    }
  }
}
