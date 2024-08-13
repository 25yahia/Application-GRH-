import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTypecontratComponent } from './ajouter-typecontrat.component';

describe('AjouterTypecontratComponent', () => {
  let component: AjouterTypecontratComponent;
  let fixture: ComponentFixture<AjouterTypecontratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterTypecontratComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterTypecontratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
