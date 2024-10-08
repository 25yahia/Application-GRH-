import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterCongeComponent } from './ajouter-conge.component';

describe('AjouterCongeComponent', () => {
  let component: AjouterCongeComponent;
  let fixture: ComponentFixture<AjouterCongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterCongeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
