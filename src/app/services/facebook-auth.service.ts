import { AuthProvider } from './auth-provider.interface';

export class FacebookAuthService implements AuthProvider {
  login(username: string): string {
    return `${username} logged in with Facebook`;
  }
}
