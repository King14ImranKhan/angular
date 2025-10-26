import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableOddComponent } from './observable-odd.component';

describe('ObservableOddComponent', () => {
  let component: ObservableOddComponent;
  let fixture: ComponentFixture<ObservableOddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableOddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableOddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
