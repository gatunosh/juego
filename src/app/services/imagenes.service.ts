import { Injectable } from '@angular/core';
import { Imagen } from '../models/imagenes.model';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {
  
  private imagenes1: Imagen[] = [
    {
      id: 1,
      img: "assets/img/aquaman.png",
      cubre: true,
      imgcubre: "assets/img/dc.jpg"
    },
    {
      id: 2,
      img: "assets/img/batman.png",
      cubre: true,
      imgcubre: "assets/img/dc.jpg"
    },
    {
      id: 3,
      img: "assets/img/daredevil.png",
      cubre: true,
      imgcubre: "assets/img/dc.jpg"
    }
  ];

  private imagenes2: Imagen[] = [
    {
      id: 3,
      img: "assets/img/daredevil.png",
      cubre: true,
      imgcubre: "assets/img/dc.jpg"
    },
    {
      id: 1,
      img: "assets/img/aquaman.png",
      cubre: true,
      imgcubre: "assets/img/dc.jpg"
    },
    {
      id: 2,
      img: "assets/img/batman.png",
      cubre: true,
      imgcubre: "assets/img/dc.jpg"
    }
  ];

  constructor() { 

  }

  getImages1() {
    return this.imagenes1;
  }

  getImages2(){
    return this.imagenes2;
  }


}
