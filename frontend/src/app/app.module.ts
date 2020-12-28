import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http'

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { CategoriesCrudComponent } from './views/categories-crud/categories-crud.component';
import { BrandsCrudComponent } from './views/brands-crud/brands-crud.component';
import { CustomersCrudComponent } from './views/customers-crud/customers-crud.component';
import { RequestsCrudComponent } from './views/requests-crud/requests-crud.component';
import { SettingsComponent } from './views/settings/settings.component';
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';

import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { CustomersCreateComponent } from './components/customers/customers-create/customers-create.component';
import { CustomersReadComponent } from './components/customers/customers-read/customers-read.component';
import { ProductRead2Component } from './components/product/product-read2/product-read2.component';

import { CustomersFullInfosComponent } from './components/customers-full-infos/customers-full-infos.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    CategoriesCrudComponent,
    BrandsCrudComponent,
    CustomersCrudComponent,
    RequestsCrudComponent,
    SettingsComponent,
    RedDirective,
    ForDirective,
    ProductCreateComponent,
    ProductReadComponent,
    CustomersCreateComponent,
    CustomersReadComponent,
    ProductRead2Component,
    CustomersFullInfosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
