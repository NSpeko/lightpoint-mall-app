import {Component, OnInit} from '@angular/core';
import {LocalStorageMallItemsService} from '../../services/local-storage-mall-items.service';
import {MallEntity} from '../../model/mall-entity';

@Component({
  selector: 'app-mall-map',
  templateUrl: './mall-map.component.html',
  styleUrls: ['./mall-map.component.css']
})
export class MallMapComponent implements OnInit {
  mallsAddresses = [
    {name: 'Корона', lat: 53.882199, lng: 27.538270},
    {name: 'Точка', lat: 53.884393, lng: 27.539737},
    {name: 'Магазин 29 ОАО ДорОРС', lat: 53.878108, lng: 27.539409},
  ];
  mallList: MallEntity[];
  latCenter = 53.882199;
  lngCenter = 27.538270;

  constructor(private itemsService: LocalStorageMallItemsService) {
  }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.itemsService.getItems()
      .subscribe(mallList => this.mallList = mallList);
  }
}
