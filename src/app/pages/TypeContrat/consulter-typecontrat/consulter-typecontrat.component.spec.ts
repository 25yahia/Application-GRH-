import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterTypecontratComponent } from './consulter-typecontrat.component';

describe('ConsulterTypecontratComponent', () => {
  let component: ConsulterTypecontratComponent;
  let fixture: ComponentFixture<ConsulterTypecontratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterTypecontratComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterTypecontratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
