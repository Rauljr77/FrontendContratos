/**
 * Imports Angular
 */
import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

/**
 * Imports Primeng
 */
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { StepperModule } from 'primeng/stepper';

/**
 * Imports Models and Services
*/
import { FinanceService } from '../app/finance.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    ButtonModule,
    DropdownModule,
    FloatLabelModule,
    StepperModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  financeService = inject(FinanceService);
  dataYear = this.financeService.dataYear;
  errorYear = this.financeService.errorYear;
  selectedYear= signal<string | null>(null);

  dataFinance = this.financeService.dataFinances;
  errorFinance = this.financeService.errorFinances;

  ngOnInit(): void {
    this.financeService.getFinancesYears();
  }

  onChangeYear(value: string): void {
    if (value) this.financeService.getFinancesByYear(Number(value));
  }
}
