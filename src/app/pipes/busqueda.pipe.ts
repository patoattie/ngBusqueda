import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busqueda'
})
export class BusquedaPipe implements PipeTransform {

  transform(listaUsuarios: any[], texto: string): any[] {
    let retorno: any[];

    if (texto.length === 0) {
      retorno = listaUsuarios;
    } else {
      retorno = listaUsuarios.filter(usuario => usuario.name.toLowerCase().includes(texto.toLowerCase()));
    }

    return retorno;
  }

}
