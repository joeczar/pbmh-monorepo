import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbmhButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: PbmhButtonComponent;
  let fixture: ComponentFixture<PbmhButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PbmhButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PbmhButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
