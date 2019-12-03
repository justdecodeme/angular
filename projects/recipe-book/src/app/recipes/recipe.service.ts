import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe('A test recipe 1', 'This is simply a test', "https://source.unsplash.com/400x300/?food"),
    new Recipe('A test recipe 2', 'This is simply a test', "https://source.unsplash.com/401x300/?food"),
    new Recipe('A test recipe 3', 'This is simply a test', "https://source.unsplash.com/402x300/?food")
  ];  

  getRecipes() {
    // return this.recipes; // pass as reference
    return this.recipes.slice(); // pass as copy
  }
}