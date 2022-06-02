import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SandkumComponent } from './sandkum.component';

describe('SandkumComponent', () => {
  let component: SandkumComponent;
  let fixture: ComponentFixture<SandkumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SandkumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SandkumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
