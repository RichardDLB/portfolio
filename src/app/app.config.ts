import { ApplicationConfig } from '@angular/core';
import { provideRouter, withDebugTracing, withHashLocation } from '@angular/router'; // Importación correcta
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Configuración básica del router usando withHashLocation
    provideRouter(routes, withHashLocation())
    
    // Si realmente necesitas HashLocationStrategy, usa esta alternativa:
    // provideRouter(routes, withHashLocation())
  ]
};