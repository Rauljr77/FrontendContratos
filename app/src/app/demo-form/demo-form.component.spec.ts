import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormComponent } from './demo-form.component';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { ErrorComponent } from '../shared/error/error.component';

describe('DemoFormComponent', () => {
  let component: DemoFormComponent;
  let fixture: ComponentFixture<DemoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        CalendarModule,
        DropdownModule,
        FloatLabelModule,
        InputTextModule,
        TagModule,
        ErrorComponent,
        DemoFormComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should initialize signals correctly", () => {
    expect(component.value()).toBe('');
    expect(component.birthDate()).toBe('');
    expect(component.cities().length).toBeGreaterThan(0);
    expect(component.selectedCity()).toBeNull();
    expect(component.isBlurList().length).toBe(3);
    expect(component.isBlurList().every(x => x === false)).toBeTrue();
  });

  it('should update isBlurList on blur', () => {
    component.onBlur(0);
    expect(component.isBlurList()[0]).toBeTrue();
  });

  it('should validate form correctly', () => {
    component.value.update(() => 'Test Value');
    component.birthDate.update(() => '01-01-2025');
    component.selectedCity.update(() => ({ code: "1", name: 'Test City' }));
    component.isBlurList.update(() => [true, true, true]);

    expect(component.isValid()).toBeTrue();
  });
});
