"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var catalog_service_1 = require("../../services/catalog.service");
var Product_1 = require("../../models/Product");
var ProductComponent = (function () {
    function ProductComponent(route, service, router) {
        this.route = route;
        this.service = service;
        this.router = router;
        this.currentProduct = new Product_1.Product();
        this.message = "";
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        // grab the current username
        var catalogId = this.route.snapshot.params['catalogId'];
        var categoryId = this.route.snapshot.params['categoryId'];
        this.service.getCatalog(catalogId).then(function (catalog) {
            _this.currentCatalog = catalog;
            _this.currentCategory = catalog.categories.find(function (category) {
                return category.categoryId == categoryId;
            });
        });
    };
    ProductComponent.prototype.createProduct = function (product) {
        this.currentCategory.products.push(product);
        this.router.navigate(['/catalog/' + this.currentCatalog.catalogId]);
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    core_1.Component({
        selector: 'app-catalog',
        styleUrls: ['app/routes/products/product.component.css'],
        templateUrl: 'app/routes/products/product.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        catalog_service_1.CatalogService,
        router_1.Router])
], ProductComponent);
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map