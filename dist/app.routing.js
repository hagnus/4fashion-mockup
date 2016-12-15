"use strict";
var router_1 = require("@angular/router");
var login_component_1 = require("./routes/login/login.component");
var catalog_list_component_1 = require("./routes/catalogs/catalog-list.component");
var catalog_view_component_1 = require("./routes/catalogs/catalog-view.component");
var category_form_component_1 = require("./routes/category/category-form.component");
var product_component_1 = require("./routes/products/product.component");
exports.appRoutes = [
    { path: '', component: login_component_1.LoginComponent },
    { path: 'catalog', component: catalog_list_component_1.CatalogListComponent },
    { path: 'catalog/:id', component: catalog_view_component_1.CatalogViewComponent },
    { path: 'product/:catalogId/:categoryId', component: product_component_1.ProductComponent },
    { path: 'category/:catalogId', component: category_form_component_1.CategoryFormComponent }
];
exports.appRouting = router_1.RouterModule.forRoot(exports.appRoutes);
//# sourceMappingURL=app.routing.js.map