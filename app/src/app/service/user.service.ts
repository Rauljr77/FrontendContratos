import { Injectable, signal } from '@angular/core';
import { IUser } from '../interface/demo';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private readonly apiUrl: string = "http://localhost:5000/users";

  data = signal<IUser[]>([]);
  error = signal<string | null>(null);

  async getUsers() {
    try {
      const response = await fetch(this.apiUrl, { 
        method  : 'GET',
        headers : {
          'Content-Type': 'application/json',
          'Accept': '*/*'
        } 
      });
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      console.log("Data service", data);
      this.data.set(data);
    } catch (error: any) {
      console.error('There was a problem with the fetch operation:', error);
      this.error.set(error.message);
    }
  }
}
