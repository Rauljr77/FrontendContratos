import { Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { IFinance } from '../interface/custom';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  private readonly apiUrl: string = environment.apiUrl;

  dataYear = signal<string[]>([]);
  errorYear = signal<string | null>(null);

  dataFinances = signal<IFinance[]>([]);
  errorFinances = signal<string | null>(null);

  async getFinancesYears() {
    try {
      const response = await fetch(`${this.apiUrl}/GetFinancesYears`, { 
        method  : 'GET',
        headers : {
          'Content-Type': 'application/json',
          'Accept': '*/*'
        } 
      });
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      this.dataYear.set(data);
    } catch (error: any) {
      this.errorYear.set(error.message);
    }
  }

  async getFinancesByYear(year: number) {
    try {
      const response = await fetch(`${this.apiUrl}/GetFinancesByYear/${year}`, { 
        method  : 'GET',
        headers : {
          'Content-Type': 'application/json',
          'Accept': '*/*'
        }
      });
      if (!response.ok) throw new Error('Network response was not ok');
      const dataFinances = await response.json();
      this.dataFinances.set(dataFinances);
    } catch (error: any) {
      this.errorFinances.set(error.message);
    }
  }
}
