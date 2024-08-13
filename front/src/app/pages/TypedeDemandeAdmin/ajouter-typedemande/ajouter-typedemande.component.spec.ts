import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTypedemandeComponent } from './ajouter-typedemande.component';

describe('AjouterTypedemandeComponent', () => {
  let component: AjouterTypedemandeComponent;
  let fixture: ComponentFixture<AjouterTypedemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterTypedemandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterTypedemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
