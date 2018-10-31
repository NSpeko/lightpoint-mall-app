import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MallMapComponent } from './mall-map.component';

describe('MallMapComponent', () => {
  let component: MallMapComponent;
  let fixture: ComponentFixture<MallMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MallMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MallMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
