import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, computed, signal } from '@angular/core';

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
  public readonly isDark = signal<boolean | undefined>(undefined);

  public themeString = computed(() => this.isDark() ? Theme.DARK : Theme.LIGHT);

  constructor(@Inject(DOCUMENT) private document: Document, @Inject(LocalStorage) private storage: Storage) {
    this.initializeThemeFromPreferences();
  }

  public toggle(): void {
    this.isDark.update(isDark => !isDark);
    this.updateRenderedTheme();
  }

  public initializeThemeFromPreferences(): void {
    const storedPreference = this.storage.getItem(THEME_STORAGE_KEY);
    const isDark = this.initIsDark(storedPreference);
    this.isDark.set(isDark);

    const linkElement = this.createThemeLink();
    this.document.head.appendChild(linkElement);
  }

  private initIsDark(theme: string | null): boolean {
    const isDark = theme === Theme.DARK;
    const systemColor = matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
    return theme ? isDark : systemColor;
  }

  private createThemeLink(): HTMLLinkElement {
    const initialTheme = this.document.querySelector('#sb-portfolio-initial-theme');
    if (initialTheme) {
      initialTheme.parentElement?.removeChild(initialTheme);
    }

    const themeLink = this.document.createElement('link');
    themeLink.id = 'sb-portfolio-custom-theme';
    themeLink.rel = 'stylesheet';
    themeLink.href = `${this.themeString()}-theme.css`;
    return themeLink;
  }

  private updateRenderedTheme(): void {
    const customLinkElement = this.document.getElementById('sb-portfolio-custom-theme') as HTMLLinkElement | null;
    if (customLinkElement) {
      customLinkElement.href = `${this.themeString()}-theme.css`;
    }

    this.storage.setItem(THEME_STORAGE_KEY, this.themeString());
  }
}
