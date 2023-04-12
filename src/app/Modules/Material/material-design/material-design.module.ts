import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
const materialDesignComponents =[MatButtonModule,
FontAwesomeModule]
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[materialDesignComponents]
})
export class MaterialDesignModule { }
