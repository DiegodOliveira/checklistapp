import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoryComponent } from "./category/category.component";
import { TestComponent } from "./test/test.component";
import {FormsModule} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CategoryComponent, TestComponent, FormsModule, HeaderComponent, FooterComponent, MatSidenavModule, MatListModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public events: string[] = [];
  public opened: boolean = false;

}
