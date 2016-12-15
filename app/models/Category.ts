import { Product } from './product';

export class Category {
    categoryId: number;
    name: string;
    avatar: string;
    products: Product[];
}