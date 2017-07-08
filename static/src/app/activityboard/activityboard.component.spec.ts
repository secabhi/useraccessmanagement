import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityboardComponent } from './activityboard.component';

describe('ActivityboardComponent', () => {
  let component: ActivityboardComponent;
  let fixture: ComponentFixture<ActivityboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
