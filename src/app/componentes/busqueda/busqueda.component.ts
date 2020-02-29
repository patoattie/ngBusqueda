import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  search: FormControl = new FormControl('');
  @Output('search') searchEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.search.valueChanges.subscribe();
  }

}
