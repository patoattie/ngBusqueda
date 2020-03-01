import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public usuarios: any[];
  public filtro = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((usuarios: any[]) => this.usuarios = usuarios);
  }
  // title = 'ngBusqueda';

  hacerBusqueda(valor: string) {
    this.filtro = valor;
  }
}
