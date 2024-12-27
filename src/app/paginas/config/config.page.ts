// IMPORTACIONES
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonCard, IonCardHeader,
  IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonInput, IonButton, IonToast
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
    IonItem, IonInput, IonButton,IonToast]
})

// CLASE ConfigPage
export class ConfigPage implements OnInit {

  // datos de consumo
  kwhConsumoIngresadoBoleta :number = 0
  precioConsumoIngresado :number = 0

  // datos de aporte
  kwhAporteIngresadoBoleta :number = 0
  precioAporteIngresado :number = 0
  isToastOpen = false;
  toastMessage = 'Por favor, completa todos los campos antes de guardar.';



  datosDeEntrada=[]
  constructor() { }

  ngOnInit() {
  }


   obtenerPrecios(kwh: number, precio: number) {
    return  precio/kwh;
  }

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  guardarConfiguracion(){
  
    if ((this.kwhAporteIngresadoBoleta | this.precioConsumoIngresado | this.kwhAporteIngresadoBoleta | this.precioAporteIngresado)>0) {
      console.log("todos los datos son  0 o mayor");
      
 
    // console.log(this.datosDeEntrada)
    localStorage.setItem("precioCompra", this.obtenerPrecios(this.kwhConsumoIngresadoBoleta, this.precioConsumoIngresado) + "");
    localStorage.setItem("precioVenta", this.obtenerPrecios(this.kwhAporteIngresadoBoleta, this.precioAporteIngresado) + "");

  }else{
    console.log("hay uno o mas que es cero")
    this.toastMessage = 'Por favor, completa todos los campos antes de guardar.';

    this.isToastOpen = true;
  } 
}


}
