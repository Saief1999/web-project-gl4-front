import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSectionProfileComponent } from './main-section-profile.component';

describe('MainSectionProfileComponent', () => {
  let component: MainSectionProfileComponent;
  let fixture: ComponentFixture<MainSectionProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSectionProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSectionProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
