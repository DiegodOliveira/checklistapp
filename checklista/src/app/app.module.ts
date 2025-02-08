import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { MaterialModule } from './material.model';
import { CategoryComponent } from "./category/category.component";
import { MatIconModule } from "@angular/material/icon";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { RouterLink } from '@angular/router';






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
  ]
})
export class AppModule { }
