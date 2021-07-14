import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WerewolfLobbyBannerComponent } from './werewolf-lobby-banner.component';

describe('WerewolfLobbyBannerComponent', () => {
  let component: WerewolfLobbyBannerComponent;
  let fixture: ComponentFixture<WerewolfLobbyBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WerewolfLobbyBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WerewolfLobbyBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
