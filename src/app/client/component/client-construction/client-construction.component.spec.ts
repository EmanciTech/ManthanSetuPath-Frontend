import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientConstructionComponent } from './client-construction.component';

describe('ClientConstructionComponent', () => {
  let component: ClientConstructionComponent;
  let fixture: ComponentFixture<ClientConstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientConstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
