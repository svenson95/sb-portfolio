import { ApplicationConfig, StaticProvider, importProvidersFrom, inject, provideAppInitializer } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { of } from 'rxjs';

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

// TODO: check how to implement scroll event again
export const SCROLL_EVENT_PROVIDER = provideAppInitializer(() => of(inject(ScrollEventService)));

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom([BrowserAnimationsModule]),
    ...STORAGE_PROVIDERS,
    SCROLL_EVENT_PROVIDER,
    provideAnimationsAsync()
  ]
};
