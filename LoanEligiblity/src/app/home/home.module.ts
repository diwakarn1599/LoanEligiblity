import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatDialogModule} from '@angular/material/dialog';
import { FormDetailsComponent } from './form-details/form-details.component';
import { NgxSpinnerModule } from "ngx-spinner";
@NgModule({
  declarations: [
    HomeComponent,
    ApplyLoanComponent,
    FormDetailsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatMenuModule,
    MatSnackBarModule,
    FormsModule,
    Ng2SearchPipeModule,
    MatDialogModule,
    NgxSpinnerModule
  ]
})
export class HomeModule { }
