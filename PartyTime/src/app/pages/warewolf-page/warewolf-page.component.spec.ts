import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WerewolfPageComponent } from './warewolf-page.component';

describe('WerewolfPageComponent', () => {
  let component: WerewolfPageComponent;
  let fixture: ComponentFixture<WerewolfPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WerewolfPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WerewolfPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
