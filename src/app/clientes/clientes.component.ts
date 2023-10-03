import { Component } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent {

    clientes: Cliente[] = [];

    constructor(private clienteService: ClienteService) { }

    ngOnInit() {
      this.clienteService.getClientes().subscribe(
        clientes => this.clientes = clientes
      );
    }

    delete(cliente: Cliente): void {
      swal.fire('Nuevo cliente', `Cliente ${cliente.nombre} creado con exito`, 'success');
      const swalWithBootstrapButtons = swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      });
      
      swalWithBootstrapButtons.fire({
        title: 'Esta seguro?',
        text: `Seguro que desea eliminar al cliente ${cliente.nombre} ${cliente.apellido}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.clienteService.delte(cliente.id).subscribe(
            response => {
              this.clientes = this.clientes.filter(cli => cli !== cliente);
              swalWithBootstrapButtons.fire(
                'Cliente Eliminado!',
                `Cliente ${cliente.nombre} eliminado con exito.`,
                'success'
              )
            }
          );
        }
      });

    }

}
