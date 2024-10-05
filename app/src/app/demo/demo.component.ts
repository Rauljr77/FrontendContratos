/**
 * Imports Angular
 */
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

/**
 * Imports Primeng
 */
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';

/**
 * Interfaces
 */
import { City, Customer } from '../interface/demo';
import { getCities, getCustomers } from '../common/demo.utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    CalendarModule,
    DropdownModule, 
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    TagModule, 
    TableModule
  ],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent implements OnInit {
  value: string = "";
  birthDate: string = "";

  filterValue : string = "";
  cities      : City[]  | undefined;
  selectedCity: City    | undefined;

  customers!: Customer[];
  router = inject(Router);

  ngOnInit(): void {
    this.cities     = getCities();
    this.customers  = getCustomers();
  }

  goToDemoForm(): void {
    this.router.navigate(['demo-form']);
  }
}
