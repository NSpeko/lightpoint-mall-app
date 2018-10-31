import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LocalStorageMallItemsService} from '../../services/local-storage-mall-items.service';
import {MallEntity} from '../../model/mall-entity';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  item: MallEntity;
  name = new FormControl('');
  address = new FormControl('');
  lat = new FormControl(0);
  lng = new FormControl(0);
  description = new FormControl('');
  id = new FormControl(0);

  constructor(
    private route: ActivatedRoute,
    private itemsService: LocalStorageMallItemsService,
  ) {
  }

  ngOnInit() {
    this.getItem();
  }

  getItem(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.itemsService.getItemByID(id)
      .subscribe(item => this.item = item);
  }
}
