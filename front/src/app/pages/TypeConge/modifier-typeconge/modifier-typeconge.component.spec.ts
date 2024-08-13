import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierTypecongeComponent } from './modifier-typeconge.component';

describe('ModifierTypecongeComponent', () => {
  let component: ModifierTypecongeComponent;
  let fixture: ComponentFixture<ModifierTypecongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierTypecongeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierTypecongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
