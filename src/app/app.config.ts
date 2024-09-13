import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideFirebaseApp(() =>
      // replace it with your keys.
      initializeApp({
        projectId: 'ng-task-18',
        appId: 'xxxxxxxxxxxxxxxxxxxxxxx',
        storageBucket: 'xxxxxxxxxxxxxxxx',
        apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        authDomain: 'xxxxxxxxxxxxxxxxxxx',
        messagingSenderId: 'xxxxxxxxxxxx',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
