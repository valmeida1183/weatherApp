import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherTitleComponent } from './weather-title.component';

describe('WeatherTitleComponent', () => {
  let component: WeatherTitleComponent;
  let fixture: ComponentFixture<WeatherTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
