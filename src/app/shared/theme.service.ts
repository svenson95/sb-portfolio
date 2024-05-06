import { DOCUMENT } from '@angular/common';
import { Injectable, computed, inject, signal } from '@angular/core';

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
  readonly document = inject(DOCUMENT);
  readonly storage = inject(LocalStorage);

  readonly isDark = signal<boolean | undefined>(undefined);

  readonly themeString = computed(() => (this.isDark() ? Theme.DARK : Theme.LIGHT));

  constructor() {
    this.initThemeFromPreferences();
  }

  toggle(): void {
    this.isDark.update((isDark) => !isDark);
    this.updateRenderedTheme();
  }

  initThemeFromPreferences(): void {
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
    const THEME_ELEMENT_ID = 'sb-portfolio-custom-theme';
    const customLinkElement = this.document.getElementById(THEME_ELEMENT_ID) as HTMLLinkElement | null;
    if (customLinkElement) {
      customLinkElement.href = `${this.themeString()}-theme.css`;
    }

    this.storage.setItem(THEME_STORAGE_KEY, this.themeString());
  }

  private initDarkTheme(): void {
    const storedPreference = this.storage.getItem(THEME_STORAGE_KEY);
    const USERS_OS_THEME_IS_DARK = '(prefers-color-scheme: dark)';
    const isBrowserDark = matchMedia?.(USERS_OS_THEME_IS_DARK).matches;
    const stored = storedPreference === Theme.DARK ? true : false;

    this.isDark.set(storedPreference === undefined ? isBrowserDark : stored);
  }
}
