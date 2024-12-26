import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonMenuButton } from '@ionic/angular/standalone';
import { IonMenu } from '@ionic/angular/standalone';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss', ],
  imports: [IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonMenuButton]
})
export class NavbarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
