import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush // Con BehaviorSubject
})
export class AppComponent implements OnInit {

  // Sin BehaviorSubject
  // public usuarios: any[];
  // public filtro = '';

  // Con BehaviorSubject
  public usuarios: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public filtro: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Sin BehaviorSubject
    // this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((usuarios: any[]) => this.usuarios = usuarios);

    // Con BehaviorSubject
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((usuarios: any[]) => this.usuarios.next(usuarios));
  }
  // title = 'ngBusqueda';

  hacerBusqueda(valor: string) {
    // Sin BehaviorSubject
    // this.filtro = valor;

    // Con BehaviorSubject
    this.filtro.next(valor);
  }
}
