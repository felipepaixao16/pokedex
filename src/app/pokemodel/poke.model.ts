export class Poke {
    status: string[];
    id: number;
    sprites: string;
    name: string;
    description: string;
    type: string[];
    image: string;
    height: number;
    weight: number;
    cod: number;
    data: number[];
  
    constructor(
      status: string[],
      id: number,
      sprites: string,
      name: string,
      description: string,
      type: string[],
      image: string,
      height: number,
      weight: number,
      cod: number,
      data: number[]
    ) {
      this.status = status;
      this.id = id;
      this.sprites = sprites;
      this.name = name;
      this.description = description;
      this.type = type;
      this.image = image;
      this.height = height;
      this.weight = weight;
      this.cod = cod;
      this.data = data;
    }
  }

