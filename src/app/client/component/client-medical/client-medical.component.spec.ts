import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientMedicalComponent } from './client-medical.component';

describe('ClientMedicalComponent', () => {
  let component: ClientMedicalComponent;
  let fixture: ComponentFixture<ClientMedicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientMedicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
