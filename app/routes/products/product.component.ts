import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogService } from '../../services/catalog.service';
import { Catalog } from '../../models/catalog';
import { Category } from '../../models/category';
import {Product} from "../../models/Product";

@Component({
    selector: 'app-catalog',
    styleUrls: ['app/routes/products/product.component.css'],
    templateUrl: 'app/routes/products/product.component.html'
})

export class ProductComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private service: CatalogService,
        private router: Router
    ) {}

    currentCatalog: Catalog;
    currentCategory: Category;
    currentProduct: Product = new Product();
    message = "";

    ngOnInit() {
        // grab the current username
        let catalogId = this.route.snapshot.params['catalogId'];
        let categoryId = this.route.snapshot.params['categoryId'];

        this.service.getCatalog(catalogId).then(catalog => {
            this.currentCatalog = catalog;

            this.currentCategory = catalog.categories.find(category => {
                return category.categoryId == categoryId;
            });
        });
    }

    createProduct(product) {
        this.currentCategory.products.push(product);
        this.router.navigate(['/catalog/' + this.currentCatalog.catalogId]);
    }
}
