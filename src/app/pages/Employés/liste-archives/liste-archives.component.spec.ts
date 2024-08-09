import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeArchivesComponent } from './liste-archives.component';

describe('ListeArchivesComponent', () => {
  let component: ListeArchivesComponent;
  let fixture: ComponentFixture<ListeArchivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeArchivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeArchivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
