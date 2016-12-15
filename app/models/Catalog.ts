import { Category } from './category';

export class Catalog {
    catalogId: number;
    name: string;
    description: string;
    avatar: string;
    version: string;
    categories : Category[];
}
