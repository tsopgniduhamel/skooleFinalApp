import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenEpreuveDetailComponent } from './examen-epreuve-detail.component';

describe('ExamenEpreuveDetailComponent', () => {
  let component: ExamenEpreuveDetailComponent;
  let fixture: ComponentFixture<ExamenEpreuveDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenEpreuveDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenEpreuveDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
