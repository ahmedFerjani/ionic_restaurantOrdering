import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable({
  providedIn: "root",
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: "1",
      name: "Escalope",
      image:
        "https://www.cookomix.com/wp-content/uploads/2018/07/escalopes-milanaises-thermomix-800x600.jpg",
      ingredients: ["fries", "salad"],
    },
    {
      id: "2",
      name: "Crepe",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSU13uk7w0vKddgfJYmX1cueCLBdMjObSMB8g&usqp=CAU",
      ingredients: ["Banana"],
    },
  ];
  constructor() {}

  public getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(id: string) {
    return {
      ...this.recipes.find((recipe) => {
        return recipe.id === id;
      }),
    };
  }

  deleteRecipe(id: string) {
    this.recipes = this.recipes.filter((recipe) => {
      return recipe.id !== id;
    });
    console.log(this.recipes);
  }
}
