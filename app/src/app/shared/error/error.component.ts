import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IBaseError } from './error.interface';

@Component({
  selector: 'error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent {
  error = input<IBaseError>();
}