import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterEmployesComponent } from './consulter-employes.component';

describe('ConsulterEmployesComponent', () => {
  let component: ConsulterEmployesComponent;
  let fixture: ComponentFixture<ConsulterEmployesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterEmployesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterEmployesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
