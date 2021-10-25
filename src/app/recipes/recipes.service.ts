import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'schnitzel',
      imageUrl: 'https://www.themediterraneandish.com/wp-content/uploads/2020/09/chicken-schnitzel-recipe-5.jpg',
      ingredients: ['French Fries', 'Pork', 'Salad']
    },
    {
      id: 'r2',
      title: 'spaghetti',
      imageUrl: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/07/14/0/FNK_20-MIN-IP-SPAGHETTI-W-MEATBALLS_H-f_s4x3.jpg.rend.hgtvcom.826.620.suffix/1594744213035.jpeg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {...this.recipes.find(recipe => recipe.id === recipeId)};
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId);
  }
}
