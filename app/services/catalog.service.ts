import { Injectable } from '@angular/core';
import { Catalog } from '../models/catalog';
import { Category } from "../models/Category";

const catalogsPromise: Promise<Catalog[]> = Promise.resolve([
    {
        catalogId: 1,
        name: 'Novembro 2016',
        version: '1.2',
        description: 'Catálogo fornecido para o mes de Novembro',
        avatar: 'http://4vector.com/i/free-vector-clothes-icons_124056_clothes-icons-by-iconvector.net/256/jacket.png',
        categories: [{
            categoryId: 1,
            name: 'Vestidos Sociais',
            avatar: 'http://media.istockphoto.com/vectors/dress-icon-vector-id507081676?k=6&m=507081676&s=170667a&w=0&h=BfQzyGWrIV1wX4bX_q9hOR9f8RxOV-c7FOIvihT_pfA=',
            products: [{
                productId: 1,
                name: 'Vestido Vermelho',
                description: '',
                price: 350.00,
                avatar: 'http://img.olx.com.br/images/50/509502033637762.jpg',
                size: 'P M G'
            },
            {
                productId: 2,
                name: 'Vestido Azul',
                description: '',
                price: 235.80,
                avatar: 'https://s-media-cache-ak0.pinimg.com/736x/75/a2/f0/75a2f00745a73dde4b1a96f215f64ed1.jpg',
                size: 'P M G'
            }]
        },
        {
            categoryId: 2,
            name: 'Calçados Esportivos',
            avatar: 'http://i.istockimg.com/file_thumbview_approve/91711989/3/stock-illustration-91711989-esporte-calcado-plana-icone-8.jpg',
            products: [{
                productId: 3,
                name: 'Tênis para Corrida',
                description: '',
                price: 105.50,
                avatar: 'http://imageshotfrogbr.blob.core.windows.net/companies/comprabasica/images-pr/T%C3%AAnis-e-Cal%C3%A7ados-Esportivos-Encontre-Aqui-218069_image.jpg',
                size: 'P M G'
            }]
        },
        {
            categoryId: 3,
            name: 'Bolsas',
            avatar: 'http://icon-icons.com/icons2/567/PNG/512/backpack_icon-icons.com_54417.png',
            products: [{
                productId: 4,
                name: 'Bolsa de couro',
                description: '',
                price: 90.90,
                avatar: 'https://s-media-cache-ak0.pinimg.com/236x/a9/9c/db/a99cdb82073cc4ccfbeae575e62f1f6d.jpg',
                size: 'P M G'
            }]
        }]
    },
    {
        catalogId: 2,
        name: 'Outubro 2016',
        version: '1.0',
        description: 'Catálogo fornecido para o mes de Outubro',
        avatar: 'http://plainicon.com/dboard/userprod/2831_9307e/prod_thumb/plainicon.com-53665-w-512px-bf02.png'
    },
    {
        catalogId: 3,
        name: 'Setembro 2016',
        version: '2.4',
        description: 'Catálogo fornecido para o mes de Setembro',
        avatar: 'http://icons.veryicon.com/ico/System/100%20Flat/shopping.ico'
    }
]);

@Injectable()
export class CatalogService {

    // get all users
    getCatalogs() {
        return catalogsPromise;
    }

    // find a specific catalog
    getCatalog(catalogId) {
        /* return catalogsPromise.then(catalogs => catalogs.find(catalog => catalog.catalogId === catalogId)); */

        let catalog = catalogsPromise.then(catalogs => {
           return catalogs.find(catalog => {
             return catalog.catalogId == catalogId;
           });
         });

         return catalog;
    }

    addCategory(catalog: Catalog, category: Category) {
        catalog.categories.push(category);
    }
}
