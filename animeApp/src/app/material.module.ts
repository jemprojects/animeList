import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
} from "@angular/material/button";
import { MatCardModule } from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from "@angular/material/input";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatSidenavModule,
    CommonModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule

  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule

  ]
})
export class MaterialModule {}
