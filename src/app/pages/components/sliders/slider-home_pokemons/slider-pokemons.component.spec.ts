import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderPokemonsComponent } from './slider-pokemons.component';

describe('SliderPokemonsComponent', () => {
  let component: SliderPokemonsComponent;
  let fixture: ComponentFixture<SliderPokemonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderPokemonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
