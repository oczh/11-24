import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzamkitalaloJatekComponent } from './szamkitalalo-jatek.component';

describe('SzamkitalaloJatekComponent', () => {
  let component: SzamkitalaloJatekComponent;
  let fixture: ComponentFixture<SzamkitalaloJatekComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SzamkitalaloJatekComponent]
    });
    fixture = TestBed.createComponent(SzamkitalaloJatekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
