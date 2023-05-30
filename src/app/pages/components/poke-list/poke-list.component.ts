import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';
import SwiperCore, { Autoplay, Navigation } from 'swiper';

SwiperCore.use([Autoplay, Navigation]);

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PokeListComponent implements OnInit {
  public getAllPokemons: any;

  constructor(
    private PokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.PokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.getAllPokemons = res.results;
        console.log(this.getAllPokemons);
      }
    );
  }
}
