import { ApplicationConfig } from '@angular/core';
import { provideRouter, withDebugTracing } from '@angular/router'; // Importación correcta
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Configuración básica del router sin withHashLocation
    provideRouter(routes)
    
    // Si realmente necesitas HashLocationStrategy, usa esta alternativa:
    // provideRouter(routes, { useHash: true })
  ]
};