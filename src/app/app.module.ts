import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'only-facebook',
        loadChildren: () =>
          import('./only-facebook/only-facebook.module').then(
            (m) => m.OnlyFacebookModule
          ),
      },
      {
        path: 'only-google',
        loadChildren: () =>
          import('./only-google/only-google.module').then(
            (m) => m.OnlyGoogleModule
          ),
      },
      {
        path: 'all-providers',
        loadChildren: () =>
          import('./all-providers/all-providers.module').then(
            (m) => m.AllProvidersModule
          ),
      },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
