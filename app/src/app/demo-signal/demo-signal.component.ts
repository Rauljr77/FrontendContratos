/**
 * Imports Angular
 */
import { CommonModule } from '@angular/common';
import { Component, computed, OnInit, signal } from '@angular/core';
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
import { City, Customer } from '../interface/demo';
import { getCities, getCustomers } from '../common/demo.utils';
@Component({
  selector: 'app-demo-signal',
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
  templateUrl: './demo-signal.component.html',
  styleUrl: './demo-signal.component.scss'
})
export class DemoSignalComponent implements OnInit {
  value     = signal<string>("");
  birthDate = signal<string>("");

  filterValue = signal<string>("");
  cities      = signal<City[]>([]);
  selectedCity= signal<City | null>(null);

  customers = signal<Customer[]>([]);

  isValid = computed(() => {
    return (this.value() && this.selectedCity())
  });


  ngOnInit(): void {
    this.cities.update(() => getCities());
    this.customers.update(() => getCustomers());
  }
}
