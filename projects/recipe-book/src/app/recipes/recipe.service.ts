import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe 1', 
      'This is simply a test', 
      "https://source.unsplash.com/400x300/?food",
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'A test recipe 2', 
      'This is simply a test', 
      "https://source.unsplash.com/401x300/?food",
      [
        new Ingredient('Bun', 2),
        new Ingredient('French', 20)
      ]),
    new Recipe(
      'A test recipe 3', 
      'This is simply a test', 
      "https://source.unsplash.com/402x300/?food",
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ])
  ];  

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    // return this.recipes; // pass as reference
    return this.recipes.slice(); // pass as copy
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}