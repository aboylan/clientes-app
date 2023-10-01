import { Component } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent {

  private cliente: Cliente = new Cliente();
  private titulo: string = "Crear Cliente";

  public create(): void {
    console.log("Clicked!");
    console.log(this.cliente);
  }

}
