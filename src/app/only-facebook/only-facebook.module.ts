import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { OnlyFacebookComponent } from './only-facebook.component';
import { AUTH_PROVIDER } from '../services/auth-provider.interface';
import { FacebookAuthService } from '../services/facebook-auth.service';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: OnlyFacebookComponent }]),
    ReactiveFormsModule,
  ],
  exports: [],
  declarations: [OnlyFacebookComponent],
  providers: [
    {
      provide: AUTH_PROVIDER,
      useClass: FacebookAuthService,
    },
  ],
})
export class OnlyFacebookModule {}
