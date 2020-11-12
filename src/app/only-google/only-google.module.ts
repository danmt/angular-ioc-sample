import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { OnlyGoogleComponent } from './only-google.component';
import { AUTH_PROVIDER } from '../services/auth-provider.interface';
import { GoogleAuthService } from '../services/google-auth.service';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: OnlyGoogleComponent }]),
    ReactiveFormsModule,
  ],
  exports: [],
  declarations: [OnlyGoogleComponent],
  providers: [
    {
      provide: AUTH_PROVIDER,
      useClass: GoogleAuthService,
    },
  ],
})
export class OnlyGoogleModule {}
