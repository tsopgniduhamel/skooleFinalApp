import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenEpreuvesComponent } from './examen-epreuves.component';

describe('ExamenEpreuvesComponent', () => {
  let component: ExamenEpreuvesComponent;
  let fixture: ComponentFixture<ExamenEpreuvesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenEpreuvesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenEpreuvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
