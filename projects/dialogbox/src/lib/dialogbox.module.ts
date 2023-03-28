import { NgModule } from '@angular/core';
import { DialogboxComponent } from './dialogbox.component';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    DialogboxComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    DialogboxComponent
  ]
})
export class DialogboxModule { }
