import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamionetasComponent } from './camionetas.component';

describe('CamionetasComponent', () => {
  let component: CamionetasComponent;
  let fixture: ComponentFixture<CamionetasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CamionetasComponent]
    });
    fixture = TestBed.createComponent(CamionetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
