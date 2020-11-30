import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProduitsComponent } from './produits/produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
const routes: Routes = [
  {path: "updateProduit/:id", component: UpdateProduitComponent },
  {path: "produits", component : ProduitsComponent},
  {path: "add-produit", component : AddProduitComponent},
  {path: "", redirectTo: "produits",pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
