import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEleveComponent } from './profile-eleve.component';

describe('ProfileEleveComponent', () => {
  let component: ProfileEleveComponent;
  let fixture: ComponentFixture<ProfileEleveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileEleveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
