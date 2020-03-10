import { Component, OnInit, HostBinding, Input } from '@angular/core';

export interface Album {
  name: string;
  image: string[];
  itemCount: string;
  price: string;
  contentType: string;
  rights: string;
  title: string;
  link: string;
  id: string;
  artist: string;
  category: string;
  releaseDate: string;
}

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  @Input('album') albums;
  @Input('filtro') filter;

  @HostBinding('class') classes = 'row';

  constructor() { }

  ngOnInit(): void {
  }

}
