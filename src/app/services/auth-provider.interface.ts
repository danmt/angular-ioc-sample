import { InjectionToken } from '@angular/core';

export enum AuthProviders {
  Facebook = 'Facebook',
  Github = 'Github',
  Google = 'Google',
}

export interface AuthProvider {
  login(username: string): string;
}

export interface AuthProvidersMap {
  map: { [k in AuthProviders]: AuthProvider | null };
  facebookProvider: AuthProvider;
  githubProvider: AuthProvider;
  googleProvider: AuthProvider;
  hasKey: (key: AuthProviders) => boolean;
}

export const AUTH_PROVIDER = new InjectionToken<AuthProvider>('authProvider');
export const AUTH_PROVIDERS = new InjectionToken<AuthProvidersMap>(
  'authProviders'
);
