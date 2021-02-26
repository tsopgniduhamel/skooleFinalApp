import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicesMatiereComponent } from './exercices-matiere.component';

describe('ExercicesMatiereComponent', () => {
  let component: ExercicesMatiereComponent;
  let fixture: ComponentFixture<ExercicesMatiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercicesMatiereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicesMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
