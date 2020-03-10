import { Component, OnInit } from '@angular/core';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'muzik';

  albunes = [];
  filtrados = [];
  unico = [];
  categoria = [];
  cat: string;
  listaFiltrada: any = [];

  /**
   * Constructor para la clase AppComponent
   * @param apiService 
   */
  constructor( private apiService: ApiService ){
  }

  ngOnInit(){
    this.getAlbum();
    this.filtrarAlbum();
  }

  /**
   * Método que lista todos los álbumes
   */
  getAlbum() {
    this.apiService.getAlbum().subscribe((data: any) => {
      this.albunes = data.feed.entry;
    })
  }
  /**
   * Este método filtra los álbumes por categoría
   */
  filtrarAlbum(){
    this.apiService.getAlbum().subscribe((data: any) => {   
      this.filtrados = data.feed.entry;

      for(let f of this.filtrados){
        this.categoria.push(f.category.attributes.label);
      }
      this.unico = this.categoria.filter((valor, indice, arreglo) =>{
        if (arreglo.indexOf(valor) === indice){
          return valor
        } 
      })
      this.unico = this.unico.sort();
      console.log(this.unico);
    })
  }
  /**
   * Este método recibe la categoría del álbum
   * <br/>del componente navegacion.
   * @param event 
   */
  procesaPropagar(event) {
    this.cat = event;
    console.log(this.cat);
    this.listarAlbumPorCategoria();
    this.albunes = this.listaFiltrada;
  }
  /**
   * Este método lista los álbumes por categoría.
   */
  listarAlbumPorCategoria() {
    this.listaFiltrada = [];
    this.albunes.forEach( data =>{
      if (data.category.attributes.label === this.cat){
        this.listaFiltrada.push(data);
      }
    })
    console.log(this.listaFiltrada);
  }
  
}
