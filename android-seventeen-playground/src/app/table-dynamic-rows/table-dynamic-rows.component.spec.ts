import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDynamicRowsComponent } from './table-dynamic-rows.component';

describe('TableDynamicRowsComponent', () => {
  let component: TableDynamicRowsComponent;
  let fixture: ComponentFixture<TableDynamicRowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableDynamicRowsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableDynamicRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
