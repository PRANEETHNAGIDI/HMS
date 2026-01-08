import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomShifting } from './room-shifting';

describe('RoomShifting', () => {
  let component: RoomShifting;
  let fixture: ComponentFixture<RoomShifting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomShifting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomShifting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
