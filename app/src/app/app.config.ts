import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom, LOCALE_ID, provideExperimentalZonelessChangeDetection, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { routes } from './app.routes';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { PrimeNGConfig } from 'primeng/api';
import { configurePrimeNG } from './config/primeng-locale';

registerLocaleData(localeEs, 'es');

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes), 
    importProvidersFrom([BrowserAnimationsModule]),
    { provide: LOCALE_ID, useValue: 'es' },
    {
      provide: APP_INITIALIZER,
      useFactory: (primengConfig: PrimeNGConfig) => () => configurePrimeNG(primengConfig),
      deps: [PrimeNGConfig],
      multi: true
    }
  ]
};
