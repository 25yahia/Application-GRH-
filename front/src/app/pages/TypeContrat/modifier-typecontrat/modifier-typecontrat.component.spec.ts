import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierTypecontratComponent } from './modifier-typecontrat.component';

describe('ModifierTypecontratComponent', () => {
  let component: ModifierTypecontratComponent;
  let fixture: ComponentFixture<ModifierTypecontratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierTypecontratComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierTypecontratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
