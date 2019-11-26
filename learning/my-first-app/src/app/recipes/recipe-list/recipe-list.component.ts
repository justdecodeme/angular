import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'This is simply a test 1', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
    new Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://cdn.pixabay.com/photo/2017/07/16/10/37/dessert-2508853_1280.jpg'),
    new Recipe('A Test Recipe 3', 'This is simply a test 3', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8BW-DGlkzriC-nzwMDWROPNXJ62DzFGdUnLq5XnE3Yu6XYjQ')
  ]

  constructor() { }

  ngOnInit() {
  }

}
