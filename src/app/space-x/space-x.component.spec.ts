import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceXComponent } from './space-x.component';

describe('SpaceXComponent', () => {
  let component: SpaceXComponent;
  let fixture: ComponentFixture<SpaceXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
