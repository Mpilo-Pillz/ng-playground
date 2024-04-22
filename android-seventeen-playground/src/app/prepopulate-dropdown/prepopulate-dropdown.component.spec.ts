import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepopulateDropdownComponent } from './prepopulate-dropdown.component';

describe('PrepopulateDropdownComponent', () => {
  let component: PrepopulateDropdownComponent;
  let fixture: ComponentFixture<PrepopulateDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrepopulateDropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrepopulateDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
