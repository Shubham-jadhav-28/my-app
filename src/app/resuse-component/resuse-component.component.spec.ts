import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResuseComponentComponent } from './resuse-component.component';

describe('ResuseComponentComponent', () => {
  let component: ResuseComponentComponent;
  let fixture: ComponentFixture<ResuseComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResuseComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResuseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
