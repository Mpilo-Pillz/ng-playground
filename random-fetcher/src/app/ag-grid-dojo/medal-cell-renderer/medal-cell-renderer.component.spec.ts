import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedalCellRendererComponent } from './medal-cell-renderer.component';

describe('MedalCellRendererComponent', () => {
  let component: MedalCellRendererComponent;
  let fixture: ComponentFixture<MedalCellRendererComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedalCellRendererComponent]
    });
    fixture = TestBed.createComponent(MedalCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
