import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { AppRoutingModule } from './app-routing.module';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
    FormsModule
    , HeaderComponent
    , FooterComponent
    , MatSidenavModule
    , MatListModule,
     MatIconModule,
      CommonModule,
       MatCheckboxModule,
        AppRoutingModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public opened: boolean = false;

}
