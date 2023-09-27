import { Component } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent {

    clientes: Cliente[] = [
      {
        id: 1,
        nombre: 'Alex',
        apellido: 'Boylan',
        email: 'alexb@bolsa.com',
        createAt: '2023-09-27'
      },
      {
        id: 2,
        nombre: 'Mr John',
        apellido: 'Doe',
        email: 'john.doe@gmail.com',
        createAt: '2023-09-28'
      },
      {
        id: 3,
        nombre: 'Linus',
        apellido: 'Torvalds',
        email: 'linus.torvalds@gmail.com',
        createAt: '2023-09-29'
      },
      {
        id: 4,
        nombre: 'Rasmus',
        apellido: 'Lerdorf',
        email: 'rasmus.lerdorf@gmail.com',
        createAt: '2023-09-30'
      },
      {
        id: 5,
        nombre: 'Erich',
        apellido: 'Gamma',
        email: 'erich.gamma@gmail.com',
        createAt: '2023-09-30'
      }
    ];
}
