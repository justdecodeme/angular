import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A test recipe 1', 'This is simply a test', "https://source.unsplash.com/400x300/?food"),
    new Recipe('A test recipe 2', 'This is simply a test', "https://source.unsplash.com/401x300/?food"),
    new Recipe('A test recipe 3', 'This is simply a test', "https://source.unsplash.com/402x300/?food")
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
