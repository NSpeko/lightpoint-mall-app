import {Inject, Injectable} from '@angular/core';
import {SESSION_STORAGE, StorageService} from 'angular-webstorage-service';
import {MALL_LIST} from '../mall/constants/mock-malls';
import {Observable, of} from 'rxjs';
import {MallEntity} from '../model/mall-entity';

const STORAGE_KEY = 'malls';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageMallItemsService {
  mallList = JSON.parse(localStorage.getItem(STORAGE_KEY)) || MALL_LIST;

  constructor() {
  }

  getItems(): Observable<MallEntity[]> {
    return of(this.mallList);
  }

  getItemByID(tempID: number): Observable<MallEntity> {
    console.log(this.mallList.find((item) => item.id === tempID), this.mallList);
    this.setItemsToLocalStorage(this.mallList);
    return of(this.mallList.find((item) => item.id === tempID));
  }

  setItemChanges(item: MallEntity): void {
    const tempIndex = this.mallList.findIndex(el => item.id === el.id);
    this.mallList[tempIndex] = item;
    this.setItemsToLocalStorage(this.mallList);
  }

  setItemsToLocalStorage(mallList: MallEntity[]): void {
    this.mallList = mallList;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.mallList));
  }
}
