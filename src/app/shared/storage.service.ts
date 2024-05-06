/* eslint-disable no-empty-function */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { InjectionToken } from '@angular/core';

export const LocalStorage = new InjectionToken<Storage>('LocalStorage');
export const SessionStorage = new InjectionToken<Storage>('SessionStorage');

export class NoopStorage implements Storage {
  length = 0;
  clear() {}
  getItem() {
    return null;
  }
  key() {
    return null;
  }
  removeItem() {}
  setItem() {}
}

type StorageType = 'localStorage' | 'sessionStorage';
export function getStorage(win: Window, storageType: StorageType): Storage {
  // When cookies are disabled in the browser, trying to access `window[storageType]` throws an error.
  // This is a workaround to prevent the application from crashing in that scenario.
  try {
    return win[storageType];
  } catch {
    return new NoopStorage();
  }
}
