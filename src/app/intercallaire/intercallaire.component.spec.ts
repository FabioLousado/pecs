import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntercallaireComponent } from './intercallaire.component';

describe('IntercallaireComponent', () => {
  let component: IntercallaireComponent;
  let fixture: ComponentFixture<IntercallaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntercallaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntercallaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
