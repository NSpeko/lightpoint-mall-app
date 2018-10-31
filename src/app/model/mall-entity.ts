import {ProductEntity} from './product-entity';

export interface MallEntity {
  name: string;
  address: string;
  lat: number;
  lng: number;
  products: ProductEntity[];
  description: string;
  id: number;
}
