import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
     {path: '', component: HomeComponent},
     {path: 'categoria', component: CategoryComponent},
     { path: '**', component: PageNotFoundComponent}
];
