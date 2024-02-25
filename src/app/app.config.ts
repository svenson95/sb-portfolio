import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { STORAGE_PROVIDERS } from './shared/storage.service';
import { WindowToken, windowProvider } from './shared/window';
import { BypassUrlPipe } from './pipes/bypass-url.pipe';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom([BrowserAnimationsModule]),
    STORAGE_PROVIDERS,
    { provide: WindowToken, useFactory: windowProvider },
    BypassUrlPipe,
  ]
};