import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoryComponent } from "./category/category.component";
import { TestComponent } from "./test/test.component";
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CategoryComponent, TestComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'checklista';
}
