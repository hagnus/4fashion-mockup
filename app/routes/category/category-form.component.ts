import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogService } from '../../services/catalog.service';
import { Catalog } from '../../models/catalog';
import { Category } from '../../models/category';

@Component({
    selector: 'category-form',
    styleUrls: ['app/routes/category/category-form.component.css'],
    templateUrl: 'app/routes/category/category-form.component.html'
})

export class CategoryFormComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private service: CatalogService,
        private router: Router
    ) {}

    currentCatalog: Catalog = null;
    currentCategory: Category = {categoryId: 0, name: '', avatar: '', products: []};
    message = null;

    ngOnInit() {
        // grab the current username
        let catalogId = this.route.snapshot.params['catalogId'];

        this.service.getCatalog(catalogId).then(catalog => {
            this.currentCatalog = catalog;
        });

        this.currentCategory = {categoryId: 0, name: '', avatar: '', products: []};
    }

    createCategory(category: Category) {
        if (category.name != '') {
            category.categoryId = this.currentCatalog.categories.length;
            this.service.addCategory(this.currentCatalog, category);

            this.router.navigate(['/catalog/' + this.currentCatalog.catalogId]);
        } else {
            this.message = 'É necessário informar um nome para a Categoria';
        }
    }
}
