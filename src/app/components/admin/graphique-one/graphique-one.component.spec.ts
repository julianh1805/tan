import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphiqueOneComponent } from './graphique-one.component';

describe('GraphiqueOneComponent', () => {
  let component: GraphiqueOneComponent;
  let fixture: ComponentFixture<GraphiqueOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphiqueOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphiqueOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
