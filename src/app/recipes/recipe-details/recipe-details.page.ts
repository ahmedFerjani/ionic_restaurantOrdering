import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { Recipe } from "../recipe.model";
import { RecipesService } from "../recipes.service";

@Component({
  selector: "app-recipe-details",
  templateUrl: "./recipe-details.page.html",
  styleUrls: ["./recipe-details.page.scss"],
})
export class RecipeDetailsPage implements OnInit {
  selectedRecipe: Recipe;
  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("id")) {
        this.router.navigate(["/recipes"]);
      }

      const recipeId = paramMap.get("id");
      this.selectedRecipe = this.recipesService.getRecipe(recipeId);
      console.log(this.selectedRecipe);
    });
  }

  deleteRecipe() {
    this.alertController
      .create({
        header: "Delete recipe",
        message: "confirm delete recipe",
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
          },
          {
            text: "Delete",
            handler: () => {
              this.recipesService.deleteRecipe(this.selectedRecipe.id);
              this.router.navigate(["/recipes"]);
            },
          },
        ],
      })
      .then((alert) => {
        alert.present();
      });
  }
}
