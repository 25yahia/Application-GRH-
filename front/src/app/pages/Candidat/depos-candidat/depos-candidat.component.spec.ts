import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeposCandidatComponent } from './depos-candidat.component';

describe('DeposCandidatComponent', () => {
  let component: DeposCandidatComponent;
  let fixture: ComponentFixture<DeposCandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeposCandidatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeposCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
