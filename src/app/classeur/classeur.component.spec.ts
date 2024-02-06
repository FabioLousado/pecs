import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseurComponent } from './classeur.component';

describe('ClasseurComponent', () => {
  let component: ClasseurComponent;
  let fixture: ComponentFixture<ClasseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClasseurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClasseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
