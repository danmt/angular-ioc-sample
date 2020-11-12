import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  AuthProviders,
  AUTH_PROVIDERS,
} from '../services/auth-provider.interface';
import { AuthProvidersService } from '../services/auth-providers.service';

@Component({
  selector: 'app-all-providers',
  templateUrl: './all-providers.component.html',
  styleUrls: ['./all-providers.component.scss'],
})
export class AllProvidersComponent implements OnInit {
  // Facebook set up
  isFacebookEnabled = false;
  facebookLoginForm = this.formBuilder.group({ username: [''] });
  // Github set up
  isGithubEnabled = false;
  githubLoginForm = this.formBuilder.group({ username: [''] });
  // Google set up
  isGoogleEnabled = false;
  googleLoginForm = this.formBuilder.group({ username: [''] });

  constructor(
    @Inject(AUTH_PROVIDERS) private authProvidersService: AuthProvidersService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.isFacebookEnabled = this.authProvidersService.hasKey(
      AuthProviders.Facebook
    );
    this.isGithubEnabled = this.authProvidersService.hasKey(
      AuthProviders.Github
    );
    this.isGoogleEnabled = this.authProvidersService.hasKey(
      AuthProviders.Google
    );
  }

  onFacebookLogin(): void {
    const { username } = this.facebookLoginForm.value;
    alert(this.authProvidersService.facebookProvider.login(username));
    this.facebookLoginForm.reset();
  }

  onGithubLogin(): void {
    const { username } = this.githubLoginForm.value;
    alert(this.authProvidersService.githubProvider.login(username));
    this.githubLoginForm.reset();
  }

  onGoogleLogin(): void {
    const { username } = this.googleLoginForm.value;
    alert(this.authProvidersService.googleProvider.login(username));
    this.googleLoginForm.reset();
  }
}
