import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing.module';
import { HomeComponent } from './home/home.component';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { RouterModule } from '@angular/router';
import { SliderPokemonsComponent } from './components/sliders/slider-pokemons/slider-pokemons.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [
    HomeComponent,
    PokemonDetailsComponent,
    PokeListComponent,
    SliderPokemonsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    RouterModule,
    CarouselModule.forRoot(),
    SwiperModule
  ],
  providers: [],
})
export class PagesModule { }
