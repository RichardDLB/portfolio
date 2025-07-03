import { ApplicationConfig } from '@angular/core';
import { routes } from './app.routes';
import { provideRouter, withHashLocation } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withHashLocation() // Nueva forma de habilitar HashLocationStrategy
    )
  ]
};