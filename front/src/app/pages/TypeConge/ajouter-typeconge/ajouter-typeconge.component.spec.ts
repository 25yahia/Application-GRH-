import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTypecongeComponent } from './ajouter-typeconge.component';

describe('AjouterTypecongeComponent', () => {
  let component: AjouterTypecongeComponent;
  let fixture: ComponentFixture<AjouterTypecongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterTypecongeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterTypecongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
