import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPictoComponent } from './add-picto.component';

describe('AddPictoComponent', () => {
  let component: AddPictoComponent;
  let fixture: ComponentFixture<AddPictoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPictoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPictoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
