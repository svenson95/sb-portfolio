import { APP_INITIALIZER, ApplicationConfig, StaticProvider, importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ScrollEventService } from './shared';
import { STORAGE_PROVIDERS } from './shared/storage.service';

export const SCROLL_EVENT_PROVIDERS: StaticProvider[] = [
  { provide: APP_INITIALIZER, useFactory: () => () => null, deps: [ScrollEventService], multi: true }
];

export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom([BrowserAnimationsModule]), STORAGE_PROVIDERS, SCROLL_EVENT_PROVIDERS]
};
