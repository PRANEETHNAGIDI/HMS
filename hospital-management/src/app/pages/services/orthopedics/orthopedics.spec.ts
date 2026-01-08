import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Orthopedics } from './orthopedics';

describe('Orthopedics', () => {
  let component: Orthopedics;
  let fixture: ComponentFixture<Orthopedics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Orthopedics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Orthopedics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
