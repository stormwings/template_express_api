import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatListModule,
  MatGridListModule,
  MatRadioModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatSnackBarModule
} from '@angular/material'; // modulos de material.angular.io

const modules = [
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatListModule,
  MatGridListModule,
  MatRadioModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatSnackBarModule
]; // se guardan en un array 'modules' para importar/exportar

@NgModule({
  imports: modules,
  exports: modules
})

 export class MaterialModule {}
