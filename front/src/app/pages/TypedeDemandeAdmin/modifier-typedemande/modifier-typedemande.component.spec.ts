import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierTypedemandeComponent } from './modifier-typedemande.component';

describe('ModifierTypedemandeComponent', () => {
  let component: ModifierTypedemandeComponent;
  let fixture: ComponentFixture<ModifierTypedemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierTypedemandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierTypedemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
