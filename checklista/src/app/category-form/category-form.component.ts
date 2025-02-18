import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-category-form',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.css'
})
export class CategoryFormComponent {
categoryForm: any;

}
