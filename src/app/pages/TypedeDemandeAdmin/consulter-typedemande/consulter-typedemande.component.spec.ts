import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterTypedemandeComponent } from './consulter-typedemande.component';

describe('ConsulterTypedemandeComponent', () => {
  let component: ConsulterTypedemandeComponent;
  let fixture: ComponentFixture<ConsulterTypedemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterTypedemandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterTypedemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
