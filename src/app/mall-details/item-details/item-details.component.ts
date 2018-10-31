import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LocalStorageMallItemsService} from '../../services/local-storage-mall-items.service';
import {MallEntity} from '../../model/mall-entity';
import {FormControl} from '@angular/forms';
import {ProductEntity} from '../../model/product-entity';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  item: MallEntity;
  name: FormControl;
  address: FormControl;
  lat: FormControl;
  lng: FormControl;
  description: FormControl;
  activeRouteSnapshot: number;

  constructor(
    private route: ActivatedRoute,
    private itemsService: LocalStorageMallItemsService,
  ) {
  }

  ngOnInit() {
    this.getItem();
    this.initializeFormControls();
  }

  getItem(): void {
    this.activeRouteSnapshot = +this.route.snapshot.paramMap.get('id');
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.itemsService.getItemByID(id)
      .subscribe(item => this.item = item);
  }

  initializeFormControls(): void {
    this.name = new FormControl(this.item.name);
    this.address = new FormControl(this.item.address);
    this.lat = new FormControl(this.item.lat);
    this.lng = new FormControl(this.item.lng);
    this.description = new FormControl(this.item.description);
  }

  setItemChanges(): void {
    this.itemsService.setItemChanges({
      name: this.name.value,
      address: this.address.value,
      lat: this.lat.value,
      lng: this.lng.value,
      products: this.item.products,
      description: this.description.value,
      id: this.item.id,
    })
    ;
  }
}
