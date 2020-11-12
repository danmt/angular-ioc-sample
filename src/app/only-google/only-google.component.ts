import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import {
  AuthProvider,
  AUTH_PROVIDER,
} from '../services/auth-provider.interface';

@Component({
  selector: 'app-only-google',
  templateUrl: './only-google.component.html',
  styleUrls: ['./only-google.component.scss'],
})
export class OnlyGoogleComponent {
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
