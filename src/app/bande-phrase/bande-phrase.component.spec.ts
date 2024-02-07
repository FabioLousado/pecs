import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandePhraseComponent } from './bande-phrase.component';

describe('BandePhraseComponent', () => {
  let component: BandePhraseComponent;
  let fixture: ComponentFixture<BandePhraseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BandePhraseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BandePhraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
