import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedmappingComponent } from './groupedmapping.component';

describe('GroupedmappingComponent', () => {
  let component: GroupedmappingComponent;
  let fixture: ComponentFixture<GroupedmappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupedmappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupedmappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
