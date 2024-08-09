import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFicheDePaieComponent } from './details-fiche-de-paie.component';

describe('DetailsFicheDePaieComponent', () => {
  let component: DetailsFicheDePaieComponent;
  let fixture: ComponentFixture<DetailsFicheDePaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsFicheDePaieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsFicheDePaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
