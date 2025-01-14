import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspectadorFormComponent } from './espectador-form.component';

describe('EspectadorFormComponent', () => {
  let component: EspectadorFormComponent;
  let fixture: ComponentFixture<EspectadorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspectadorFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EspectadorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
