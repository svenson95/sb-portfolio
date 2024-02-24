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
    if (storedPreference) {
      this.isDark.set(storedPreference === Theme.DARK);
    } else {
      this.isDark.set(matchMedia?.('(prefers-color-scheme: dark)').matches ?? false);
    }

    const initialTheme = this.document.querySelector('#sb-portfolio-initial-theme');
    if (initialTheme) {
      initialTheme.parentElement?.removeChild(initialTheme);
    }

    const themeLink = this.createLinkElement({
      id: 'sb-portfolio-custom-theme',
      rel: 'stylesheet',
      href: `${this.themeString()}-theme.css`
    });
    this.document.head.appendChild(themeLink);
  }

  private updateRenderedTheme(): void {
    const customLinkElement = this.document.getElementById('sb-portfolio-custom-theme') as HTMLLinkElement | null;
    if (customLinkElement) {
      customLinkElement.href = `${this.themeString()}-theme.css`;
    }

    this.storage.setItem(THEME_STORAGE_KEY, this.themeString());
  }

  private createLinkElement(props: { id: string, rel: string, href: string }): HTMLLinkElement {
    const link = this.document.createElement('link');
    link.id = props.id;
    link.rel = props.rel;
    link.href = props.href;
    return link;
  }
}
