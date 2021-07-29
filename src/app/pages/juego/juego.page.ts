import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { interval } from 'rxjs';
import { Imagen } from 'src/app/models/imagenes.model';
import { ImagenesService } from '../../services/imagenes.service';


@Component({
  selector: 'app-juego',
  templateUrl: './juego.page.html',
  styleUrls: ['./juego.page.scss'],
})
export class JuegoPage implements OnInit {

  constructor(private imagenesService:ImagenesService, private alertController: AlertController) { 
    this.imagenes1 = this.imagenesService.getImages1();
    this.imagenes2 = this.imagenesService.getImages2();
  }

  contador:number = 0;

  imagenes1: Imagen[] = [];
  imagenes2: Imagen[] = [];

  idImage1:number = 0;
  idImage2:number = 50;

  contardorFinal = 0;

  ngOnInit() {

    const contador = interval(1000);

    contador.subscribe((n) => {
      this.contador = n;
    });
  }


  revisaImagen1(id:number) {

    let imagen;
    for (let i = 0; i < this.imagenes1.length; i++) {
      if(this.imagenes1[i].id === id){
        this.imagenes1[i].cubre = false;
        imagen = this.imagenes1[i];
      }
    }
    this.idImage1 = id;

  }

  revisaImagen2(id:number) {
    let imagen:Imagen;
    for (let i = 0; i < this.imagenes2.length; i++) {
      if(this.imagenes2[i].id === id){
        this.imagenes2[i].cubre = false;
        imagen = this.imagenes2[i];
      }
    }
    this.idImage2 = id;

    
    if (!this.verificaImagenes()) {
      imagen.cubre = true;
      for (let i = 0; i < this.imagenes1.length; i++) {
        if(this.imagenes1[i].id === id){
          this.imagenes1[i].cubre = true;
        }
      }
    }
    this.idImage2 = 0;
    this.idImage2 = 50;
    
    for (let i = 0; i < this.imagenes1.length; i++) {
      if(!this.imagenes1[i].cubre){
        this.contardorFinal++;
      }else{
        this.contardorFinal--;
      }
    }

    for (let i = 0; i < this.imagenes2.length; i++) {
      if(!this.imagenes1[i].cubre){
        this.contardorFinal++;
      }else{
        this.contardorFinal--;
      }
    }

    if (this.contardorFinal === 6) {
      this.finJuego();
    }

    
  }

  verificaImagenes() {
    if (this.idImage1 != this.idImage2) {
      return false;
    }else{
      return true;
    }
  }


  async finJuego() {
    const alert = await this.alertController.create({
      header: 'Has ganado!!',
      subHeader: 'Fin del juego!!!',
      message: `Te demoraste ${this.contador} segundos en terminar el juego`,
      buttons: [
        {
          text: 'Empezar',
          handler:() => {
            console.log('Fin del juego');
            
          }
        }
      ]
    });



    await alert.present();
  }


}
