import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './routes/login/login.component';
import { CatalogListComponent } from './routes/catalogs/catalog-list.component';
import { CatalogViewComponent } from './routes/catalogs/catalog-view.component';
import { CategoryFormComponent } from './routes/category/category-form.component';
import { ProductComponent } from './routes/products/product.component';


export const appRoutes: Routes =  [
    { path: '', component: LoginComponent },
    { path: 'catalog', component: CatalogListComponent },
    { path: 'catalog/:id', component: CatalogViewComponent },
    { path: 'product/:catalogId/:categoryId', component: ProductComponent },
    { path: 'category/:catalogId', component: CategoryFormComponent}
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);