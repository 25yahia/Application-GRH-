import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTypereunionComponent } from './ajouter-typereunion.component';

describe('AjouterTypereunionComponent', () => {
  let component: AjouterTypereunionComponent;
  let fixture: ComponentFixture<AjouterTypereunionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterTypereunionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterTypereunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
