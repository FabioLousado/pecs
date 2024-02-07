import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamClasseurComponent } from './param-classeur.component';

describe('ParamClasseurComponent', () => {
  let component: ParamClasseurComponent;
  let fixture: ComponentFixture<ParamClasseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParamClasseurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParamClasseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
