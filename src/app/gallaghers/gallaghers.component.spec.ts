import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallaghersComponent } from './gallaghers.component';

describe('GallaghersComponent', () => {
  let component: GallaghersComponent;
  let fixture: ComponentFixture<GallaghersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GallaghersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GallaghersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
