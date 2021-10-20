import { Component, OnInit } from '@angular/core';
import { IRecipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: IRecipe[] = [
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
      ingredients: ['Spaghettin', 'Meat', 'Tomatoes']
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
