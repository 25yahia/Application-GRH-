import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterTypecongeComponent } from './consulter-typeconge.component';

describe('ConsulterTypecongeComponent', () => {
  let component: ConsulterTypecongeComponent;
  let fixture: ComponentFixture<ConsulterTypecongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterTypecongeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterTypecongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
