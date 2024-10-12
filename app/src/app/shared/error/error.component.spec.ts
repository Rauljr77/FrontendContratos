import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorInputComponent } from './error.component';

describe('ErrorInputComponent', () => {
  let component: ErrorInputComponent;
  let fixture: ComponentFixture<ErrorInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
