import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterFicheDePaieComponent } from './consulter-fiche-de-paie.component';

describe('ConsulterFicheDePaieComponent', () => {
  let component: ConsulterFicheDePaieComponent;
  let fixture: ComponentFixture<ConsulterFicheDePaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterFicheDePaieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterFicheDePaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
