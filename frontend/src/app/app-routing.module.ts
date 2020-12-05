import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandsCrudComponent } from './views/brands-crud/brands-crud.component';
import { CategoriesCrudComponent } from './views/categories-crud/categories-crud.component';
import { CustomersCrudComponent } from './views/customers-crud/customers-crud.component';

import { HomeComponent } from "./views/home/home.component";
import { ProductCrudComponent } from "./views/product-crud/product-crud.component";
import { RequestsCrudComponent } from './views/requests-crud/requests-crud.component';
import { SettingsComponent } from './views/settings/settings.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';

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
    path: "brands",
    component: BrandsCrudComponent
  },
  {
    path: "customers",
    component: CustomersCrudComponent
  },
  {
    path: "requests",
    component: RequestsCrudComponent
  },
  {
    path: "settings",
    component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
