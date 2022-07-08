import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

import { LocalStorage } from 'src/app/services/storage.service';

export const STORAGE_KEY = 'sb-portfolio-theme';

@Component({
  selector: 'sb-theme-toggle',
  templateUrl: './theme-toggle.component.html'
})
export class ThemeToggleComponent {
  public isDark = false;

  public get toggleLabel(): string {
    return `Switch to ${this.isDark ? 'light' : 'dark'} mode`;
  }

  constructor(@Inject(DOCUMENT) private document: Document, @Inject(LocalStorage) private storage: Storage) {
    this.initializeThemeFromPreferences();
  }

  public toggleTheme(): void {
    this.isDark = !this.isDark;
    this.updateRenderedTheme();
  }

  private initializeThemeFromPreferences(): void {
    const storedPreference = this.storage.getItem(STORAGE_KEY);

    if (storedPreference) {
      this.isDark = storedPreference === 'true';
    } else {
      this.isDark = matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
    }

    const initialTheme = this.document.querySelector('#sb-portfolio-initial-theme');
    if (initialTheme) {
      initialTheme.parentElement?.removeChild(initialTheme);
    }

    const themeLink = this.document.createElement('link');
    themeLink.id = 'sb-portfolio-custom-theme';
    themeLink.rel = 'stylesheet';
    themeLink.href = `${this.getThemeName()}-theme.css`;
    this.document.head.appendChild(themeLink);
  }

  private getThemeName(): string {
    return this.isDark ? 'dark' : 'light';
  }

  private updateRenderedTheme(): void {
    const customLinkElement = this.document.getElementById('sb-portfolio-custom-theme') as HTMLLinkElement | null;
    if (customLinkElement) {
      customLinkElement.href = `${this.getThemeName()}-theme.css`;
    }

    this.storage.setItem(STORAGE_KEY, String(this.isDark));
  }
}
