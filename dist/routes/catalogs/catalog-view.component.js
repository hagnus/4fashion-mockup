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
var CatalogViewComponent = (function () {
    function CatalogViewComponent(route, service, router) {
        this.route = route;
        this.service = service;
        this.router = router;
        this.currentCategory = null;
    }
    CatalogViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        // grab the current username
        var catalogId = this.route.snapshot.params['id'];
        this.service.getCatalog(catalogId).then(function (catalog) {
            _this.catalog = catalog;
        });
    };
    CatalogViewComponent.prototype.displayProducts = function (category) {
        if (this.currentCategory != null) {
            if (this.currentCategory.categoryId == category.categoryId) {
                this.currentCategory = null;
            }
            else {
                this.currentCategory = category;
            }
        }
        else {
            this.currentCategory = category;
        }
    };
    return CatalogViewComponent;
}());
CatalogViewComponent = __decorate([
    core_1.Component({
        selector: 'catalog-view',
        styleUrls: ['app/routes/catalogs/catalog-view.component.css'],
        templateUrl: 'app/routes/catalogs/catalog-view.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        catalog_service_1.CatalogService,
        router_1.Router])
], CatalogViewComponent);
exports.CatalogViewComponent = CatalogViewComponent;
//# sourceMappingURL=catalog-view.component.js.map