import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientEnvironmentalComponent } from './client-environmental.component';

describe('ClientEnvironmentalComponent', () => {
  let component: ClientEnvironmentalComponent;
  let fixture: ComponentFixture<ClientEnvironmentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientEnvironmentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientEnvironmentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
