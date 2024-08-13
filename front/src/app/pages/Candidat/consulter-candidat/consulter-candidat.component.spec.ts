import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterCandidatComponent } from './consulter-candidat.component';

describe('ConsulterCandidatComponent', () => {
  let component: ConsulterCandidatComponent;
  let fixture: ComponentFixture<ConsulterCandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterCandidatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
