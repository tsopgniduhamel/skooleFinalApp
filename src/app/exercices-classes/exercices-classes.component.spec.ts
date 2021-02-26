import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicesClassesComponent } from './exercices-classes.component';

describe('ExercicesClassesComponent', () => {
  let component: ExercicesClassesComponent;
  let fixture: ComponentFixture<ExercicesClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercicesClassesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicesClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
