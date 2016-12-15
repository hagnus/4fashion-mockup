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
var CategoryFormComponent = (function () {
    function CategoryFormComponent(route, service, router) {
        this.route = route;
        this.service = service;
        this.router = router;
        this.currentCatalog = null;
        this.currentCategory = { categoryId: 0, name: '', avatar: '', products: [] };
        this.message = null;
    }
    CategoryFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        // grab the current username
        var catalogId = this.route.snapshot.params['catalogId'];
        this.service.getCatalog(catalogId).then(function (catalog) {
            _this.currentCatalog = catalog;
        });
        this.currentCategory = { categoryId: 0, name: '', avatar: '', products: [] };
    };
    CategoryFormComponent.prototype.createCategory = function (category) {
        if (category.name != '') {
            category.categoryId = this.currentCatalog.categories.length;
            this.service.addCategory(this.currentCatalog, category);
            this.router.navigate(['/catalog/' + this.currentCatalog.catalogId]);
        }
        else {
            this.message = 'É necessário informar um nome para a Categoria';
        }
    };
    return CategoryFormComponent;
}());
CategoryFormComponent = __decorate([
    core_1.Component({
        selector: 'category-form',
        styleUrls: ['app/routes/category/category-form.component.css'],
        templateUrl: 'app/routes/category/category-form.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        catalog_service_1.CatalogService,
        router_1.Router])
], CategoryFormComponent);
exports.CategoryFormComponent = CategoryFormComponent;
//# sourceMappingURL=category-form.component.js.map