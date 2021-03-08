import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarRendererNativeComponent } from './bar-renderer-native.component';

describe('BarRendererNativeComponent', () => {
  let component: BarRendererNativeComponent;
  let fixture: ComponentFixture<BarRendererNativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarRendererNativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarRendererNativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
