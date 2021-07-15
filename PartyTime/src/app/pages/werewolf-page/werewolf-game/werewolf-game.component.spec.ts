import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WerewolfGameComponent } from './werewolf-game.component';

describe('WerewolfGameComponent', () => {
  let component: WerewolfGameComponent;
  let fixture: ComponentFixture<WerewolfGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WerewolfGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WerewolfGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
