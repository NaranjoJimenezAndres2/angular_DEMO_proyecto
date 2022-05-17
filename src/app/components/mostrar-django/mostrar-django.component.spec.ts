import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarDjangoComponent } from './mostrar-django.component';

describe('MostrarDjangoComponent', () => {
  let component: MostrarDjangoComponent;
  let fixture: ComponentFixture<MostrarDjangoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarDjangoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarDjangoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
