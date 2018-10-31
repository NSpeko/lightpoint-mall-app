import {Component, OnInit} from '@angular/core';
import {LocalStorageMallItemsService} from '../../services/local-storage-mall-items.service';
import {MallEntity} from '../../model/mall-entity';

@Component({
  selector: 'app-mall-list',
  templateUrl: './mall-list.component.html',
  styleUrls: ['./mall-list.component.css']
})
export class MallListComponent implements OnInit {
  mallList: MallEntity[] = [];

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
