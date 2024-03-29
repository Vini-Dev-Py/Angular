import { Customers } from './components/customers/customers.model';
import { CustomersFullInfosComponent } from './components/customers-full-infos/customers-full-infos.component';
import { CustomersCreateComponent } from './components/customers/customers-create/customers-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesCrudComponent } from './views/categories-crud/categories-crud.component';
import { CustomersCrudComponent } from './views/customers-crud/customers-crud.component';

import { HomeComponent } from "./views/home/home.component";
import { ProductCrudComponent } from "./views/product-crud/product-crud.component";
import { RequestsCrudComponent } from './views/requests-crud/requests-crud.component';
import { RequestsCreateComponent } from './components/request/requests-create/requests-create.component';
import { RequestsReadComponent } from './components/request/requests-read/requests-read.component';
import { SettingsComponent } from './views/settings/settings.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { CategoryCreateComponent } from './components/category/category-create/category-create.component';
import { RequestFilterComponent } from './components/request/request-filter/request-filter.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  },
  {
    path: "categories",
    component: CategoriesCrudComponent
  },
  {
    path: "categories/create",
    component: CategoryCreateComponent
  },
  {
    path: "customers",
    component: CustomersCrudComponent
  },
  {
    path: "customers/create",
    component: CustomersCreateComponent
  },
  {
    path: "customers/infosfull/:name",
    component: CustomersFullInfosComponent
  },
  {
    path: "requests",
    component: RequestsCrudComponent
  },
  {
    path: "requests/filter",
    component: RequestFilterComponent
  },
  {
    path: "requests/create",
    component: RequestsCreateComponent
  },
  {
    path: "settings",
    component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  exports: [RouterModule]
})
export class AppRoutingModule { }
