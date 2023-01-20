import { Injectable } from '@angular/core';
import { AuthUser } from './auth-user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  getLoggedInUser(): AuthUser | null {
    const jsonUser = localStorage.getItem('user');
    if (jsonUser) {
      return JSON.parse(jsonUser);
    }
    return null;
  }

  login(email: string, password: string): boolean {
    try {
      if (
        email.toLowerCase() == environment.adminEmail &&
        password == environment.adminPassword
      ) {
        localStorage.setItem(
          'user',
          JSON.stringify({ email: email.toLowerCase() })
        );
        return true;
      } else {
        throw new Error('Username or password is incorrect');
      }
    } catch (err: any) {
      console.error(err);
      throw new Error(err.message);
    }
  }
}
