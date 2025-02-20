import { DOCUMENT } from '@angular/common';
import { Injectable, computed, inject, signal } from '@angular/core';

import { AppTheme } from '../models';

import { LocalStorage } from './storage.service';

const THEME_STORAGE_KEY = 'sb-portfolio-theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  readonly document = inject(DOCUMENT);
  readonly storage = inject(LocalStorage);

  readonly isDark = signal<boolean | undefined>(undefined);
  readonly themeString = computed<AppTheme>(() => (this.isDark() ? 'dark' : 'light'));

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
    this.setColorScheme(theme);
  }

  private initStoredTheme(): void {
    const storedPreference = this.storage.getItem(THEME_STORAGE_KEY) as AppTheme;
    const USERS_OS_THEME_IS_DARK = '(prefers-color-scheme: dark)';
    const isUsersOsDark = matchMedia?.(USERS_OS_THEME_IS_DARK).matches;
    const storedDarkTheme = storedPreference === 'dark' ? true : false;
    const isDarkThemePreferred = !!storedPreference ? storedDarkTheme : isUsersOsDark;
    this.isDark.set(isDarkThemePreferred);

    const isUsersThemeAndStoredSame = !!storedPreference ? isUsersOsDark && storedPreference === 'dark' : true;
    if (!isUsersThemeAndStoredSame) {
      this.setColorScheme(storedPreference);
    }
  }

  private setColorScheme(theme: AppTheme): void {
    document.documentElement.style.setProperty('color-scheme', theme);
  }
}
