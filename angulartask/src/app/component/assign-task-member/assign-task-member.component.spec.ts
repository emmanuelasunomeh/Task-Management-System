import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignTaskMemberComponent } from './assign-task-member.component';

describe('AssignTaskMemberComponent', () => {
  let component: AssignTaskMemberComponent;
  let fixture: ComponentFixture<AssignTaskMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignTaskMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignTaskMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
