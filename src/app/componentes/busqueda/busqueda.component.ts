import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush // Con BehaviorSubject
})
export class BusquedaComponent implements OnInit {

  search: FormControl = new FormControl('');
  @Output() searchEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.search.valueChanges
    .pipe(debounceTime(300)) // para que haga una demora de 300 ms
    .subscribe(valor => this.searchEmitter.emit(valor));
  }

}
