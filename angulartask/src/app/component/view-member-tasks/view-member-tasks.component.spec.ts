import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMemberTasksComponent } from './view-member-tasks.component';

describe('ViewMemberTasksComponent', () => {
  let component: ViewMemberTasksComponent;
  let fixture: ComponentFixture<ViewMemberTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMemberTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMemberTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
