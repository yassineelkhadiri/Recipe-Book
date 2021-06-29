import { Component, OnInit , Input,  } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
 @Input() recipe : Recipe;
constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }
  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
