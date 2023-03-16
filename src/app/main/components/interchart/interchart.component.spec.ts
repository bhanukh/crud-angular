import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterchartComponent } from './interchart.component';

describe('InterchartComponent', () => {
  let component: InterchartComponent;
  let fixture: ComponentFixture<InterchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
