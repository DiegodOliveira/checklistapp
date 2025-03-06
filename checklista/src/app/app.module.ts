import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { MaterialModule } from './material.model';
import { CategoryComponent } from "./category/category.component";
import { MatIconModule } from "@angular/material/icon";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { RouterLink } from '@angular/router';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryFormComponent } from './category-form/category-form.component';


import localePt from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePt)



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
    , HeaderComponent
    , FooterComponent
    , MatSidenavModule
    , MatListModule
    , MatIconModule
    , CategoryComponent
    , HomeComponent
    , RouterLink
    , ReactiveFormsModule
    , CategoryEditComponent
    , CategoryFormComponent
    , NgModule
  ],
  providers: [
    { provide:  LOCALE_ID, useValue: 'pt-BR' }
  ]
})
export class AppModule { }
