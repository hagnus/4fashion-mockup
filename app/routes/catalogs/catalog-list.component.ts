import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../../services/catalog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Catalog } from '../../models/catalog';

@Component({
    selector: 'app-catalog',
    styleUrls: ['app/routes/catalogs/catalog-list.component.css'],
    templateUrl: 'app/routes/catalogs/catalog-list.component.html'
})

export class CatalogListComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private service: CatalogService,
        private router: Router
    ) {}

    catalogs: Catalog[];

    ngOnInit() {
        // grab the current username
        this.service.getCatalogs().then(catalogs => this.catalogs = catalogs);
    }
}
