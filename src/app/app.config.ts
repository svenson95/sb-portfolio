import {
  ApplicationConfig,
  StaticProvider,
  importProvidersFrom,
  inject,
  provideAppInitializer,
  provideExperimentalZonelessChangeDetection
} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

import {
  LocalStorage,
  ScrollEventService,
  SessionStorage,
  StaticTranslationLoader,
  WindowToken,
  getStorage,
  windowProvider
} from './shared';

const STORAGE_PROVIDERS: StaticProvider[] = [
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

const SCROLL_EVENT_PROVIDER = provideAppInitializer(() => of(inject(ScrollEventService)));

const TRANSLATION_PROVIDER = TranslateModule.forRoot({
  loader: {
    provide: TranslateLoader,
    useClass: StaticTranslationLoader
  }
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideAnimationsAsync(),
    importProvidersFrom([BrowserAnimationsModule, TRANSLATION_PROVIDER]),
    ...STORAGE_PROVIDERS,
    SCROLL_EVENT_PROVIDER
  ]
};
