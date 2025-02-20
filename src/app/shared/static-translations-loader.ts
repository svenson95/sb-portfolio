import { TranslateLoader, TranslationObject } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import * as TranslationsDE from '../../assets/i18n/de.json';
import * as TranslationsEN from '../../assets/i18n/en.json';
import { AppLanguage } from '../models';

interface Translation {
  [key: string]: TranslationObject;
}

const TRANSLATIONS: Translation = {
  en: TranslationsEN,
  de: TranslationsDE
};

export class StaticTranslationLoader implements TranslateLoader {
  public getTranslation(lang: AppLanguage): Observable<TranslationObject> {
    const translation = TRANSLATIONS[lang];
    if (translation) {
      return of(translation);
    } else {
      console.error(`Unknown language: ${lang}`);
      return of({});
    }
  }
}
