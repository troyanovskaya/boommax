import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgPanelComponent } from './lg-panel.component';

describe('LgPanelComponent', () => {
  let component: LgPanelComponent;
  let fixture: ComponentFixture<LgPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LgPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LgPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
