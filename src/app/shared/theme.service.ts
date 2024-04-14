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

  public themeString = computed(() => (this.isDark() ? Theme.DARK : Theme.LIGHT));

  constructor(@Inject(DOCUMENT) private document: Document, @Inject(LocalStorage) private storage: Storage) {
    this.initThemeFromPreferences();
  }

  public toggle(): void {
    this.isDark.update((isDark) => !isDark);
    this.updateRenderedTheme();
  }

  public initThemeFromPreferences(): void {
    this.initDarkTheme();

    const themeElement = this.createHtmlLinkElement();
    this.document.head.appendChild(themeElement);
  }

  private createHtmlLinkElement(): HTMLLinkElement {
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

  private initDarkTheme(): void {
    const storedPreference = this.storage.getItem(THEME_STORAGE_KEY);
    const isBrowserDark = matchMedia?.('(prefers-color-scheme: dark)').matches;
    const stored = storedPreference === Theme.DARK ? true : false;

    this.isDark.set(storedPreference === undefined ? isBrowserDark : stored);
  }
}
