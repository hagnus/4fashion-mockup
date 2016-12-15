import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  styleUrls: ['app/components/menu/app.menu.css'],
  templateUrl: 'app/components/menu/app.menu.html'
})
export class AppMenu {
  message = 'This is the sample message.';

  menuitems = [
      {
        name: 'Entrar/Registrar',
        ref: '#login'
      },
      {
        name: 'Parceiros',
        ref: '#partners'
      },
      {
        name: 'Portfolio',
        ref:  '#portfolio'
      }];
}