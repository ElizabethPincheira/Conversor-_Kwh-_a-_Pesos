import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,IonCard,IonCardHeader,
  IonCardTitle,IonCardContent,IonItem,IonInput,IonButton } from '@ionic/angular/standalone';
import { NavbarComponent } from 'src/app/componentes/navbar/navbar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, 
    FormsModule, NavbarComponent,IonCard,IonCardHeader,IonCardTitle,IonCardContent,
    IonItem,IonInput,IonButton],
})
export class HomePage {

  constructor() {}

  // ******VARIABLES*****

totalPagar : number | null = null;

  // datos ingresados
kwhUtilizadosMedidor : number = 0
kwhGeneradosMedidor : number = 0

// precios localstore
// precio compra
precioDeCompra : any = localStorage.getItem("precioCompra");
numeroPrecioDeCompra : number | null = parseFloat(this.precioDeCompra);

// precio compra
precioDeventa : any = localStorage.getItem("precioVenta");
numeroPrecioDeVenta : number | null = parseFloat(this.precioDeventa);


calcularValores( kwh : number, precio : number){
  return kwh * precio
}

calcular(){
  console.log("boton")
  this.totalPagar = 0;

  console.log(this.totalPagar)
}



  




}

