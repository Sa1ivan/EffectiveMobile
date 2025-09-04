import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MoviesPageComponent} from "./movies-page/movies-page.component";
import {SharedModule} from "../shared/shared.module";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {MatDialogModule} from "@angular/material/dialog";
import {MatPaginatorModule} from "@angular/material/paginator";

const routes: Routes = [
  {path: '', component: MoviesPageComponent}
];

@NgModule({
  declarations: [
    MoviesPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatDialogModule,
    RouterModule.forChild(routes),
    MatPaginatorModule
  ],
  exports: [
    MoviesPageComponent,
  ]
})
export class PagesModule {
}
