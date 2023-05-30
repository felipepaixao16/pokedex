import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';
import SwiperCore, { Autoplay, Navigation, Swiper } from 'swiper';

SwiperCore.use([Autoplay, Navigation]);

@Component({
  selector: 'app-slider-pokemons',
  templateUrl: './slider-pokemons.component.html',
  styleUrls:['./slider-pokemons.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class SliderPokemonsComponent implements OnInit {

  public swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
    rotate: 60,
    stretch: 0,
    depth: 100,
    modifier: 5,
    slideShadows : true,
    },
    pagination: {
    el: '.swiper-pagination',
    },
});

  public getSliderPokes: any;

  constructor( 
    private PokeApiService: PokeApiService
    ) {}

  ngOnInit(): void {
    this.PokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.getSliderPokes = res.results;
        console.log(this.getSliderPokes);
      }
    );
  }
  
}
