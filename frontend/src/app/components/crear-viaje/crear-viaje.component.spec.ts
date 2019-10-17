import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearViajeComponent } from './crear-viaje.component';

describe('CrearViajeComponent', () => {
  let component: CrearViajeComponent;
  let fixture: ComponentFixture<CrearViajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearViajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
