import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.scss']
})
export class NavegacionComponent implements OnInit {

  @Input('album') albums;
  @Input('categorias') cat;

  @Output()
  propagar = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  /**
   * Este método captura la categoría de los álbumes
   * @param categoria 
   */
  getAlbumCategory(categoria: string){
    this.propagar.emit(categoria);    
  }
}

