import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterPresenceComponent } from './consulter-presence.component';

describe('ConsulterPresenceComponent', () => {
  let component: ConsulterPresenceComponent;
  let fixture: ComponentFixture<ConsulterPresenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterPresenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterPresenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
