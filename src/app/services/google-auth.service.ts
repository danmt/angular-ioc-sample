import { AuthProvider } from './auth-provider.interface';

export class GoogleAuthService implements AuthProvider {
  login(username: string): string {
    return `${username} logged in with Google`;
  }
}
