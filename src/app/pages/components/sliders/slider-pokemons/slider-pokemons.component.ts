import { Component, ViewEncapsulation, Input } from '@angular/core';
import { Poke } from 'src/app/pokemodel/poke.model';
import SwiperCore, { Autoplay, Navigation } from 'swiper';

SwiperCore.use([Autoplay, Navigation]);

@Component({
  selector: 'app-slider-pokemons',
  templateUrl: './slider-pokemons.component.html',
  styleUrls: ['./slider-pokemons.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class SliderPokemonsComponent {
  @Input() pokemons: Poke[] = [];
  
}
