import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MallItemComponent } from './mall-item.component';

describe('MallItemComponent', () => {
  let component: MallItemComponent;
  let fixture: ComponentFixture<MallItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MallItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MallItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
