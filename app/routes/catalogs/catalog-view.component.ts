import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogService } from '../../services/catalog.service';
import { Catalog } from '../../models/catalog';
import { Category } from '../../models/category';

@Component({
    selector: 'catalog-view',
    styleUrls: ['app/routes/catalogs/catalog-view.component.css'],
    templateUrl: 'app/routes/catalogs/catalog-view.component.html'
})

export class CatalogViewComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private service: CatalogService,
        private router: Router
    ) {}

    catalog: Catalog;
    currentCategory: Category = null;

    ngOnInit() {
        // grab the current username
        let catalogId = this.route.snapshot.params['id'];

        this.service.getCatalog(catalogId).then(catalog => {
            this.catalog = catalog;
        });
    }

    displayProducts(category: Category) {
        if (this.currentCategory != null) {
            if (this.currentCategory.categoryId == category.categoryId) {
                this.currentCategory = null;
            } else {
                this.currentCategory = category;
            }
        } else {
            this.currentCategory = category;
        }
    }
}
