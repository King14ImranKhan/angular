import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableEvenComponent } from './observable-even.component';

describe('ObservableEvenComponent', () => {
  let component: ObservableEvenComponent;
  let fixture: ComponentFixture<ObservableEvenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableEvenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableEvenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
