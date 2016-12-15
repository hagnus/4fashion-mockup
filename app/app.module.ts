import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

/* COMPONENTS */
import { LoginComponent } from './routes/login/login.component';
import { CatalogListComponent } from './routes/catalogs/catalog-list.component';
import { CatalogViewComponent } from './routes/catalogs/catalog-view.component';
import { CategoryFormComponent } from './routes/category/category-form.component';
import { ProductComponent } from './routes/products/product.component';
import { AppComponent } from './app.component';

/* SERVICES */
import { CatalogService } from './services/catalog.service';

import { appRouting } from './app.routing';

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      appRouting
  ],
  declarations: [
      AppComponent,
      LoginComponent,
      CatalogListComponent,
      CatalogViewComponent,
      CategoryFormComponent,
      ProductComponent
  ],
  providers: [
      CatalogService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}