import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalindromoComponent } from './palindromo.component';

describe('PalindromoComponent', () => {
  let component: PalindromoComponent;
  let fixture: ComponentFixture<PalindromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PalindromoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PalindromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
