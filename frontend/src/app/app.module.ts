import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { CategoriesCrudComponent } from './views/categories-crud/categories-crud.component';
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
import { RequestsComponent } from './components/request/requests/requests.component';

// import { HttpService } from '../shared/http.service';

registerLocaleData(localePt);
import { from } from 'rxjs';
import { RequestsReadComponent } from './components/request/requests-read/requests-read.component';
import { RequestsCreateComponent } from './components/request/requests-create/requests-create.component';
import { CategoryReadComponent } from './components/category/category-read/category-read.component';
import { CategoryCreateComponent } from './components/category/category-create/category-create.component';
import { RequestFilterComponent } from './components/request/request-filter/request-filter.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    CategoriesCrudComponent,
    CustomersCrudComponent,
    RequestsCrudComponent,
    CategoriesCrudComponent,
    SettingsComponent,
    RedDirective,
    ForDirective,
    ProductCreateComponent,
    ProductReadComponent,
    CustomersCreateComponent,
    CustomersReadComponent,
    ProductRead2Component,
    CustomersFullInfosComponent,
    RequestsComponent,
    RequestsReadComponent,
    RequestsCreateComponent,
    CategoryReadComponent,
    CategoryCreateComponent,
    RequestFilterComponent,
    ProductListComponent
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
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    FontAwesomeModule,
    MatDatepickerModule,
    MatNativeDateModule 
  ],
  exports: [
    MatDatepickerModule, 
    MatNativeDateModule 
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
