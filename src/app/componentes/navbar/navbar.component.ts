import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonMenuButton } from '@ionic/angular/standalone';
import { IonMenu } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss', ],
  imports: [IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonMenuButton]
})
export class NavbarComponent  implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  dirigirHome(){
    this.navCtrl.navigateRoot('/home')
  }

  dirigirConfig(){
    this.navCtrl.navigateRoot('/config')
  }




}
