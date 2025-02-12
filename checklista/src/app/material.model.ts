import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card'
import { MatTableModule } from '@angular/material/table'

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    CommonModule,
    MatCheckboxModule,
    MatDividerModule,
    MatCardModule,
    MatTableModule
  ],
  exports:[
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,
    CommonModule,
    MatCheckboxModule,
    MatCardModule,
    MatTableModule
  ]
})
export class MaterialModule {}
