import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatMenuModule} from '@angular/material/menu';

const materialDesignComponents =[MatButtonModule,
FontAwesomeModule,
MatMenuModule]
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[materialDesignComponents]
})
export class MaterialDesignModule { }
