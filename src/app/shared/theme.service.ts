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
    this.initStoredTheme();
  }

  toggle(): void {
    this.isDark.update((isDark) => !isDark);
    this.updateRenderedTheme();
  }

  private updateRenderedTheme(): void {
    const theme = this.themeString();
    this.storage.setItem(THEME_STORAGE_KEY, theme);
    document.documentElement.style.setProperty('color-scheme', theme);
  }

  private initStoredTheme(): void {
    const storedPreference = this.storage.getItem(THEME_STORAGE_KEY);
    const USERS_OS_THEME_IS_DARK = '(prefers-color-scheme: dark)';
    const isBrowserDark = matchMedia?.(USERS_OS_THEME_IS_DARK).matches;
    const storedDarkTheme = storedPreference === Theme.DARK ? true : false;
    const theme = storedDarkTheme ? 'dark' : 'light';

    this.isDark.set(storedPreference === undefined ? isBrowserDark : storedDarkTheme);
    document.documentElement.style.setProperty('color-scheme', theme);
  }
}
