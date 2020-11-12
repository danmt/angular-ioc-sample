import { AuthProvider } from './auth-provider.interface';

export class GithubAuthService implements AuthProvider {
  login(username: string): string {
    return `${username} logged in with Github`;
  }
}
