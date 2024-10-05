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
import { ErrorInputComponent } from '../shared/error/error-input/error-input.component';

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
    ErrorInputComponent
  ],
  templateUrl: './demo-form.component.html',
  styleUrl: './demo-form.component.scss'
})
export class DemoFormComponent implements OnInit {
  errorList: string[] = ["Campo requerido", "Colocar nombre", "No colocar números"];

  value     = signal<string>("");
  birthDate = signal<string>("");

  cities      = signal<City[]>([]);
  selectedCity= signal<City | null>(null);

  isBlurList = signal<boolean[]>(initIsBlurList(ATTRIBUTES_LENGTH));

  isValid = computed(() => { return (this.value() && this.selectedCity()) });

  ngOnInit(): void { this.cities.update(() => getCities()); }

  onBlur(position: number): void { this.isBlurList()[position] = true; }
}

const ATTRIBUTES_LENGTH: number = 3;

const initIsBlurList = (length: number): boolean[] => {
  let list: boolean[] = [];
  for (let index = 0; index < length; index++) {
    list.push(false);
  }
  return list;
}