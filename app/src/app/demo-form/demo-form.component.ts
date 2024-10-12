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
import { FloatLabelModule } from 'primeng/floatlabel';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';

/**
 * Custom
 */
import { City } from '../interface/demo';
import { getCities } from '../common/demo.utils';
import { ErrorComponent } from '../shared/error/error.component';
import { getConfigError, getConfigErrorCalendar } from '../shared/validators/form-validators';

@Component({
  selector: 'app-demo-form',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    CalendarModule,
    DropdownModule, 
    FloatLabelModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    TagModule,
    ErrorComponent
  ],
  templateUrl: './demo-form.component.html',
  styleUrl: './demo-form.component.scss'
})
export class DemoFormComponent implements OnInit {

  value     = signal<string>("");
  birthDate = signal<string>("");

  cities      = signal<City[]>([]);
  selectedCity= signal<City | null>(null);

  isBlurList  = signal<boolean[]>(initIsBlurList(ATTRIBUTES_LENGTH));
  isValid     = computed(() => {
    const valueErrors     = getConfigError(this.value(), this.isBlurList()[0]).errorItems;
    const birthDateErrors = getConfigErrorCalendar(this.birthDate(), this.isBlurList()[1]).errorItems;

    const hasValueErrors      = valueErrors.some(error => error.condition());
    const hasBirthDateErrors  = birthDateErrors.some(error => error.condition());
    const hasCityErrors       = this.selectedCity() === null;

    return !hasValueErrors && !hasBirthDateErrors && !hasCityErrors;
  });

  getErrorList          = getConfigError;
  getErrorCalendarList  = getConfigErrorCalendar;

  ngOnInit(): void { 
    this.cities.update(() => getCities()); 
  }

  onBlur(position: number): void { 
    this.isBlurList()[position] = true; 
  }
}

const ATTRIBUTES_LENGTH: number = 3;

const initIsBlurList = (length: number): boolean[] => Array.from({ length }, () => false);
