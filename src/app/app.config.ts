import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
import {
  ApplicationConfig,
  LOCALE_ID,
  StaticProvider,
  importProvidersFrom,
  inject,
  provideAppInitializer
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

const LOCALE_ID_PROVIDER = { provide: LOCALE_ID, useValue: 'de-DE' };

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    importProvidersFrom([BrowserAnimationsModule, TRANSLATION_PROVIDER]),
    ...STORAGE_PROVIDERS,
    SCROLL_EVENT_PROVIDER,
    LOCALE_ID_PROVIDER
  ]
};

registerLocaleData(localeDe, 'de-DE', localeDeExtra);
