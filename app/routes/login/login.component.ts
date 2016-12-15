import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'login',
    styleUrls: ['app/routes/login/login.component.css'],
    templateUrl: 'app/routes/login/login.component.html'
})

export class LoginComponent {
    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {}

    message = null;
    currentUser = { name : '', password: ''};
    loggedUser = null;

    loginUser(user) {
       if (user.name === 'admin') {
           if (user.password === 'fashionadmin') {
               this.loggedUser = user;

               this.router.navigate(['/catalog']);
           } else {
               this.message = 'Senha incorreta';
               this.loggedUser = null;
           }
       } else {
           this.message = 'Usuário inválido';
           this.loggedUser = null;
       }
    }

}
