import { ApplicationConfig, StaticProvider, importProvidersFrom, inject, provideAppInitializer } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LocalStorage, ScrollEventService, SessionStorage, WindowToken, getStorage, windowProvider } from './shared';

export const STORAGE_PROVIDERS: StaticProvider[] = [
  { provide: WindowToken, useFactory: windowProvider },
  {
    provide: LocalStorage,
    useFactory: (win: Window) => getStorage(win, 'localStorage'),
    deps: [WindowToken]
  },
  {
    provide: SessionStorage,
    useFactory: (win: Window) => getStorage(win, 'sessionStorage'),
    deps: [WindowToken]
  }
];

export const SCROLL_EVENT_PROVIDERS: StaticProvider[] = [
  provideAppInitializer(() => {
        const initializerFn = (() => () => null)(inject(ScrollEventService));
        return initializerFn();
      })
];

export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom([BrowserAnimationsModule]), STORAGE_PROVIDERS, SCROLL_EVENT_PROVIDERS]
};
