import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDeptComponent } from './empDept.component';

describe('EmpDeptComponent', () => {
  let component: EmpDeptComponent;
  let fixture: ComponentFixture<EmpDeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpDeptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
