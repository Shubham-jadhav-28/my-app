import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserToChildComponent } from './user-to-child.component';

describe('UserToChildComponent', () => {
  let component: UserToChildComponent;
  let fixture: ComponentFixture<UserToChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserToChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserToChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
