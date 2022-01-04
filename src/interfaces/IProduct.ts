import { ProductCategory } from '../enums/ProductCategory';

export interface IProduct {
  id: number;
  productName: string;
  price: number;
  size: 'small' | 'medium' | 'large';
  category: ProductCategory;
  isRed: boolean;
  isBlue: boolean;
  isGreen: boolean;
}
