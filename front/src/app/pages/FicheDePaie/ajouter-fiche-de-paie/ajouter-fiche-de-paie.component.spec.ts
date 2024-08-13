import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterFicheDePaieComponent } from './ajouter-fiche-de-paie.component';

describe('AjouterFicheDePaieComponent', () => {
  let component: AjouterFicheDePaieComponent;
  let fixture: ComponentFixture<AjouterFicheDePaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterFicheDePaieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterFicheDePaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
