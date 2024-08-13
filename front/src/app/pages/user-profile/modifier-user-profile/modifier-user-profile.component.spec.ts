import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierUserProfileComponent } from './modifier-user-profile.component';

describe('ModifierUserProfileComponent', () => {
  let component: ModifierUserProfileComponent;
  let fixture: ComponentFixture<ModifierUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierUserProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
