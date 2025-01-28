import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { MaterialModule } from './material.model';
import { RouterOutlet } from '@angular/router';
import { CategoryComponent } from "./category/category.component";
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';





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
    , RouterOutlet
    , CategoryComponent
  ]
})
export class AppModule { }
