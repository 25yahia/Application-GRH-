import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierTypereunionComponent } from './modifier-typereunion.component';

describe('ModifierTypereunionComponent', () => {
  let component: ModifierTypereunionComponent;
  let fixture: ComponentFixture<ModifierTypereunionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierTypereunionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierTypereunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
