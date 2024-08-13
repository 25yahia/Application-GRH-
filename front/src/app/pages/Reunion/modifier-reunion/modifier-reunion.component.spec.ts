import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierReunionComponent } from './modifier-reunion.component';

describe('ModifierReunionComponent', () => {
  let component: ModifierReunionComponent;
  let fixture: ComponentFixture<ModifierReunionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierReunionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierReunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
