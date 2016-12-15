"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var catalogsPromise = Promise.resolve([
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
                        price: 350.00,
                        avatar: 'http://img.olx.com.br/images/50/509502033637762.jpg'
                    },
                    {
                        productId: 2,
                        name: 'Vestido Azul',
                        price: 235.80
                    }]
            },
            {
                categoryId: 2,
                name: 'Calçados Esportivos',
                avatar: 'http://i.istockimg.com/file_thumbview_approve/91711989/3/stock-illustration-91711989-esporte-calcado-plana-icone-8.jpg',
                products: [{
                        productId: 3,
                        name: 'Tênis para Corrida',
                        price: 105.50
                    }]
            },
            {
                categoryId: 3,
                name: 'Bolsas',
                avatar: 'http://icon-icons.com/icons2/567/PNG/512/backpack_icon-icons.com_54417.png',
                products: [{
                        productId: 4,
                        name: 'Bolsa de couro',
                        price: 90.90
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
var CatalogService = (function () {
    function CatalogService() {
    }
    // get all users
    CatalogService.prototype.getCatalogs = function () {
        return catalogsPromise;
    };
    // find a specific catalog
    CatalogService.prototype.getCatalog = function (catalogId) {
        /* return catalogsPromise.then(catalogs => catalogs.find(catalog => catalog.catalogId === catalogId)); */
        var catalog = catalogsPromise.then(function (catalogs) {
            return catalogs.find(function (catalog) {
                return catalog.catalogId == catalogId;
            });
        });
        return catalog;
    };
    CatalogService.prototype.addCategory = function (catalog, category) {
        catalog.categories.push(category);
    };
    return CatalogService;
}());
CatalogService = __decorate([
    core_1.Injectable()
], CatalogService);
exports.CatalogService = CatalogService;
