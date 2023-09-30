import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuckComponent } from './duck.component';

describe('DuckComponent', () => {
  let component: DuckComponent;
  let fixture: ComponentFixture<DuckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DuckComponent]
    });
    fixture = TestBed.createComponent(DuckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
