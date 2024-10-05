import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'error-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error-input.component.html',
  styleUrl: './error-input.component.scss'
})
export class ErrorInputComponent {
  @Input({ required: true }) errorList: string[] = [];
}
