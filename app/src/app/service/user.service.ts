import { Injectable, signal } from '@angular/core';
import { IUser } from '../interface/demo';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private readonly apiUrl: string = environment.apiUrl;

  data = signal<IUser[]>([]);
  error = signal<string | null>(null);

  async getUsers() {
    try {
      const response = await fetch(`${this.apiUrl}/GetUsers`, { 
        method  : 'GET',
        headers : {
          'Content-Type': 'application/json',
          'Accept': '*/*'
        } 
      });
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      this.data.set(data);
    } catch (error: any) {
      this.error.set(error.message);
    }
  }
}
