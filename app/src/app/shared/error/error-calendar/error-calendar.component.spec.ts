import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorCalendarComponent } from './error-calendar.component';

describe('ErrorCalendarComponent', () => {
  let component: ErrorCalendarComponent;
  let fixture: ComponentFixture<ErrorCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorCalendarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
