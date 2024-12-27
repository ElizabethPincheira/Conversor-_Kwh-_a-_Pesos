import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor(private router : Router) {
   
  }

  onInit(){
    const datosLocal = localStorage.getItem('precioCompra');
    if(!datosLocal){
      this.router.navigate(['/config']);
    }
  }



}
