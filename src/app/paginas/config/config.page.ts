// IMPORTACIONES
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonCard, IonCardHeader,
  IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonInput, IonButton
} from '@ionic/angular/standalone';
import { NavbarComponent } from 'src/app/componentes/navbar/navbar.component';

// DECORADOR @Component
@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule,
    FormsModule, NavbarComponent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
    IonItem, IonInput, IonButton]
})

// CLASE ConfigPage
export class ConfigPage implements OnInit {

  // datos de consumo
  kwhConsumoIngresadoBoleta :number = 0
  precioConsumoIngresado :number = 0

  // datos de aporte
  kwhAporteIngresadoBoleta :number = 0
  precioAporteIngresado :number = 0

  constructor() { }

  ngOnInit() {
  }


   obtenerPrecios(kwh: number, precio: number) {
    return  precio/kwh;
  }

  guardarConfiguracion(){

    localStorage.setItem("precioCompra", this.obtenerPrecios(this.kwhConsumoIngresadoBoleta, this.precioConsumoIngresado) + "");
    localStorage.setItem("precioVenta", this.obtenerPrecios(this.kwhAporteIngresadoBoleta, this.precioAporteIngresado) + "");

  }


}
