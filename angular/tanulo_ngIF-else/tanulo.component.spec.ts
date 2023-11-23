import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanuloComponent } from './tanulo.component';

describe('TanuloComponent', () => {
  let component: TanuloComponent;
  let fixture: ComponentFixture<TanuloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TanuloComponent]
    });
    fixture = TestBed.createComponent(TanuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
