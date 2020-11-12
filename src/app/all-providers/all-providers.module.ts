import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { environment } from '../../environments/environment';
import { AllProvidersComponent } from './all-providers.component';
import {
  AuthProviders,
  AUTH_PROVIDERS,
} from '../services/auth-provider.interface';
import { AuthProvidersService } from '../services/auth-providers.service';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AllProvidersComponent }]),
    ReactiveFormsModule,
  ],
  exports: [],
  declarations: [AllProvidersComponent],
  providers: [
    {
      provide: AUTH_PROVIDERS,
      useFactory: () =>
        AuthProvidersService.forRoot({
          [AuthProviders.Facebook]: !!environment.facebookAuthEnabled,
          [AuthProviders.Github]: !!environment.githubAuthEnabled,
          [AuthProviders.Google]: !!environment.googleAuthEnabled,
        }),
    },
  ],
})
export class AllProvidersModule {}
