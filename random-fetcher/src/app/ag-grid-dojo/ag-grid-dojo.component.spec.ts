import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridDojoComponent } from './ag-grid-dojo.component';

describe('AgGridDojoComponent', () => {
  let component: AgGridDojoComponent;
  let fixture: ComponentFixture<AgGridDojoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgGridDojoComponent]
    });
    fixture = TestBed.createComponent(AgGridDojoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
