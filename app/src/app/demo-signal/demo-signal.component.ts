/**
 * Imports Angular
 */
import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

/**
 * Imports Primeng
 */
import { AccordionModule } from 'primeng/accordion';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule} from 'primeng/fieldset';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';

/**
 * Imports Models and Services
 */
import { City, Customer } from '../interface/demo';
import { getCities, getCustomers } from '../common/demo.utils';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-demo-signal',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    AccordionModule,
    CalendarModule,
    DropdownModule, 
    FieldsetModule,
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

  apiService = inject(UserService);
  data = this.apiService.data;
  error = this.apiService.error;

  ngOnInit(): void {
    this.cities.update(() => getCities());
    this.customers.update(() => getCustomers());
    this.apiService.getUsers();
    console.log("Datos", this.data());
  }
}
