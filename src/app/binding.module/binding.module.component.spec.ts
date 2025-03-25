import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingModuleComponent } from './binding.module.component';

describe('BindingModuleComponent', () => {
  let component: BindingModuleComponent;
  let fixture: ComponentFixture<BindingModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BindingModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindingModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
