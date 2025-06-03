import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './app/material.model';
import { LOCALE_ID } from '@angular/core';
import { appConfig } from './app/app.config';


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      HttpClientModule,
      MaterialModule
    ),
    provideRouter(routes),
    provideAnimations(),
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
}).catch(err => console.error(err));
