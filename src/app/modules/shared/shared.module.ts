import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import {
  MatButtonModule,
  MatRippleModule
} from '@angular/material';

// Components

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRippleModule
  ],
  declarations: [],
  entryComponents: [],
  exports: [
    MatButtonModule,
    MatRippleModule
  ],
  providers: []
})

export class SharedModule { }
