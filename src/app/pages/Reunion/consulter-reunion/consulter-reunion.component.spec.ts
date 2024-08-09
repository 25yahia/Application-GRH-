import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterReunionComponent } from './consulter-reunion.component';

describe('ConsulterReunionComponent', () => {
  let component: ConsulterReunionComponent;
  let fixture: ComponentFixture<ConsulterReunionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterReunionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterReunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
