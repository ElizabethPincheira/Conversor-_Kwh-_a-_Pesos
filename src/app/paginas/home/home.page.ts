import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonCard, IonCardHeader,
  IonCardTitle, IonCardContent, IonItem, IonInput, IonButton,
  NavController
} from '@ionic/angular/standalone';
import { NavbarComponent } from 'src/app/componentes/navbar/navbar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule,
    FormsModule, NavbarComponent, IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonItem, IonInput, IonButton],
})
export class HomePage {

  constructor(private navCtrl: NavController) { }

  // ******VARIABLES*****

  totalPagar: number | null = null;


  // datos ingresados
  kwhUtilizadosMedidor: number = 0
  kwhGeneradosMedidor: number = 0

  // precios localstore
  // precio compra
  precioDeCompra: any = localStorage.getItem("precioCompra");
  numeroPrecioDeCompra: number = parseFloat(this.precioDeCompra);

  // precio compra
  precioDeventa: any = localStorage.getItem("precioVenta");
  numeroPrecioDeVenta: number = parseFloat(this.precioDeventa);




  ngOnInit() {
    const datosLocal = localStorage.getItem('precioCompra');
    if (!datosLocal) {
      this.navCtrl.navigateRoot('/config');
    }
  }


  calcular() {

    let utilizado: number = this.kwhUtilizadosMedidor * this.numeroPrecioDeCompra;
    let generado: number = this.kwhGeneradosMedidor * this.precioDeventa;

    this.totalPagar = utilizado - generado;

    this.totalPagar = Math.round(this.totalPagar)

    console.log(this.totalPagar);
  }










}

