import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import {
  AuthProvider,
  AUTH_PROVIDER,
} from '../services/auth-provider.interface';

@Component({
  selector: 'app-only-facebook',
  templateUrl: './only-facebook.component.html',
  styleUrls: ['./only-facebook.component.scss'],
})
export class OnlyFacebookComponent {
  loginForm = this.formBuilder.group({ username: [''] });

  constructor(
    @Inject(AUTH_PROVIDER) private authProvider: AuthProvider,
    private formBuilder: FormBuilder
  ) {}

  onLogin(): void {
    const { username } = this.loginForm.value;
    alert(this.authProvider.login(username));
  }
}
