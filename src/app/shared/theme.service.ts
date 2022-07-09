import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

import { LocalStorage } from './storage.service';

const THEME_STORAGE_KEY = 'sb-portfolio-theme';
export enum Theme {
  DARK = 'dark',
  LIGHT = 'light'
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public isDark = false;

  constructor(@Inject(DOCUMENT) private document: Document, @Inject(LocalStorage) private storage: Storage) {
    this.initializeThemeFromPreferences();
  }

  public toggle(): void {
    this.isDark = !this.isDark;
    this.updateRenderedTheme();
  }

  public initializeThemeFromPreferences(): void {
    const storedPreference = this.storage.getItem(THEME_STORAGE_KEY);

    if (storedPreference) {
      this.isDark = storedPreference === Theme.DARK;
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
    return this.isDark ? Theme.DARK : Theme.LIGHT;
  }

  private updateRenderedTheme(): void {
    const customLinkElement = this.document.getElementById('sb-portfolio-custom-theme') as HTMLLinkElement | null;
    if (customLinkElement) {
      customLinkElement.href = `${this.getThemeName()}-theme.css`;
    }

    this.storage.setItem(THEME_STORAGE_KEY, this.getThemeName());
  }
}
