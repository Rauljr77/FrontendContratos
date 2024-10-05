import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorDropdownComponent } from './error-dropdown.component';

describe('ErrorDropdownComponent', () => {
  let component: ErrorDropdownComponent;
  let fixture: ComponentFixture<ErrorDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
