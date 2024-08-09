import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterTypereunionComponent } from './consulter-typereunion.component';

describe('ConsulterTypereunionComponent', () => {
  let component: ConsulterTypereunionComponent;
  let fixture: ComponentFixture<ConsulterTypereunionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterTypereunionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterTypereunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
