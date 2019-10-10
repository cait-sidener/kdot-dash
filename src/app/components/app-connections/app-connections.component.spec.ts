import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppConnectionsComponent } from './app-connections.component';

describe('AppConnectionsComponent', () => {
  let component: AppConnectionsComponent;
  let fixture: ComponentFixture<AppConnectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppConnectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppConnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
