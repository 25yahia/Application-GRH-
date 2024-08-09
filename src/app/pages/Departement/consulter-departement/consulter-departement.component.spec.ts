import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterDepartementComponent } from './consulter-departement.component';

describe('ConsulterDepartementComponent', () => {
  let component: ConsulterDepartementComponent;
  let fixture: ComponentFixture<ConsulterDepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterDepartementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
