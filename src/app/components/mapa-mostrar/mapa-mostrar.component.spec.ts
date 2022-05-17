import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaMostrarComponent } from './mapa-mostrar.component';

describe('MapaMostrarComponent', () => {
  let component: MapaMostrarComponent;
  let fixture: ComponentFixture<MapaMostrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaMostrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
