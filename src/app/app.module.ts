import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';



import {MatTreeModule} from '@angular/material/tree';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from './components/dialog/dialog.component';
import { DialogExampleComponent } from './components/dialog-example/dialog-example.component';






@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    DialogComponent,
    DialogExampleComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTreeModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,



    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
