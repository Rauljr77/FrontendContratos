import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, InputSignal } from '@angular/core';
import { ErrorComponent } from './error.component';
import { IBaseError } from './error.interface';
import { signal, WritableSignal } from '@angular/core';

describe('ErrorInputComponent', () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display error messages based on conditions', () => {
    const errorItems = [
      { message: 'Error 1', condition: () => true },
      { message: 'Error 2', condition: () => false },
      { message: 'Error 3', condition: () => true }
    ];
    /* const errorSignal: WritableSignal<IBaseError> = signal<IBaseError>({ value: "Pepe", errorItems });
    component.error = toInputSignal(errorSignal);
    fixture.detectChanges(); */
    /* const errorSignal: InputSignal<IBaseError | undefined> = signal<IBaseError | undefined>({ value: "Pepe", errorItems });
    component.error = errorSignal;
    fixture.detectChanges(); */

    const errorMessages = de.queryAll(By.css('.text-orange-400'));
    expect(errorMessages.length).toBe(2);
    expect(errorMessages[0].nativeElement.textContent).toContain('Error 1');
    expect(errorMessages[1].nativeElement.textContent).toContain('Error 3');
  });
});