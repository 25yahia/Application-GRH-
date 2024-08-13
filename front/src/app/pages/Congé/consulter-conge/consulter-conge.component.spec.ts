import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterCongeComponent } from './consulter-conge.component';

describe('ConsulterCongeComponent', () => {
  let component: ConsulterCongeComponent;
  let fixture: ComponentFixture<ConsulterCongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterCongeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
