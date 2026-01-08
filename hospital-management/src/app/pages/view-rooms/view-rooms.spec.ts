import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRooms } from './view-rooms';

describe('ViewRooms', () => {
  let component: ViewRooms;
  let fixture: ComponentFixture<ViewRooms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewRooms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRooms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
