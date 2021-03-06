import { IProduct } from '../interfaces/IProduct';

import { ProductCategory } from '../enums/ProductCategory';

export const products: Array<IProduct> = [
  {
    id: 1,
    productName: 'T-Shirts - green',
    price: 499,
    size: 'medium',
    category: ProductCategory.CLOTHES,
    isRed: false,
    isBlue: false,
    isGreen: true,
  },
  {
    id: 2,
    productName: 'T-Shirts - red',
    price: 499,
    size: 'medium',
    category: ProductCategory.CLOTHES,
    isRed: true,
    isBlue: false,
    isGreen: false,
  },
  {
    id: 3,
    productName: 'T-Shirts - blue',
    price: 499,
    size: 'medium',
    category: ProductCategory.CLOTHES,
    isRed: false,
    isBlue: true,
    isGreen: false,
  },
  {
    id: 4,
    productName: 'Pants - blue',
    price: 599,
    size: 'medium',
    category: ProductCategory.CLOTHES,
    isRed: false,
    isBlue: true,
    isGreen: false,
  },
  {
    id: 5,
    productName: 'Pants - green',
    price: 599,
    size: 'medium',
    category: ProductCategory.CLOTHES,
    isRed: false,
    isBlue: false,
    isGreen: true,
  },
  {
    id: 6,
    productName: 'Pants - red',
    price: 599,
    size: 'medium',
    category: ProductCategory.CLOTHES,
    isRed: true,
    isBlue: false,
    isGreen: false,
  },
];
