import { ApplicationConfig, StaticProvider, importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { LocalStorage, SessionStorage, WindowToken, getStorage, windowProvider } from './shared';

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
// export const SCROLL_EVENT_PROVIDERS: StaticProvider[] = [
//   provideAppInitializer(() => {
//     const initializerFn = (
//       () => () =>
//         null
//     )(inject(ScrollEventService));
//     return initializerFn();
//   })
// ];

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom([BrowserAnimationsModule]),
    STORAGE_PROVIDERS,
    // SCROLL_EVENT_PROVIDERS,
    provideAnimationsAsync()
  ]
};
