import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparacionPilotosComponent } from './comparacion-pilotos.component';

describe('ComparacionPilotosComponent', () => {
  let component: ComparacionPilotosComponent;
  let fixture: ComponentFixture<ComparacionPilotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparacionPilotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparacionPilotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
