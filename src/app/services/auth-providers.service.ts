import {
  AuthProvider,
  AuthProviders,
  AuthProvidersMap,
} from './auth-provider.interface';
import { FacebookAuthService } from './facebook-auth.service';
import { GithubAuthService } from './github-auth.service';
import { GoogleAuthService } from './google-auth.service';

export class AuthProvidersService implements AuthProvidersMap {
  map: { [k in AuthProviders]: AuthProvider | null } = {
    [AuthProviders.Facebook]: null,
    [AuthProviders.Github]: null,
    [AuthProviders.Google]: null,
  };

  set facebookProvider(value: AuthProvider) {
    this.map.Facebook = value;
  }

  get facebookProvider(): AuthProvider {
    if (!this.map.Facebook) {
      throw Error('Facebook auth provider is not enabled');
    }

    return this.map.Facebook;
  }

  set githubProvider(value: AuthProvider) {
    this.map.Github = value;
  }

  get githubProvider(): AuthProvider {
    if (!this.map.Github) {
      throw Error('Github auth provider is not enabled');
    }

    return this.map.Github;
  }

  set googleProvider(value: AuthProvider) {
    this.map.Google = value;
  }

  get googleProvider(): AuthProvider {
    if (!this.map.Google) {
      throw Error('Google auth provider is not enabled');
    }

    return this.map.Google;
  }

  static forRoot(
    authProviders: { [k in AuthProviders]: boolean }
  ): AuthProvidersService {
    const authProvidersService = new AuthProvidersService();

    if (authProviders.Facebook) {
      authProvidersService.facebookProvider = new FacebookAuthService();
    }

    if (authProviders.Github) {
      authProvidersService.githubProvider = new GithubAuthService();
    }

    if (authProviders.Google) {
      authProvidersService.googleProvider = new GoogleAuthService();
    }

    return authProvidersService;
  }

  hasKey(key: AuthProviders): boolean {
    return !!this.map[key];
  }
}
