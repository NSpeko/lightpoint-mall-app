import {Component, Input, OnInit} from '@angular/core';
import {MallEntity} from '../../model/mall-entity';

@Component({
  selector: 'app-mall-item',
  templateUrl: './mall-item.component.html',
  styleUrls: ['./mall-item.component.css']
})
export class MallItemComponent implements OnInit {
  @Input() item: MallEntity;

  constructor() {
  }

  ngOnInit() {
  }

}
