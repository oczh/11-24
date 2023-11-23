import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UserCardComponent } from './user-card/user-card.component';
import { UserAddComponent } from './user-add/user-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
// forgalomiránytás esetén betöltöm a RouterModule-t 
import { RouterModule } from '@angular/router';
// forgalimirányításhoz betöltöm az előre definiált útvonalakat 
import { appRoutes } from './app.routes';
import { UserEditComponent } from './user-edit/user-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserCardComponent,
    UserAddComponent,
    HomeComponent,
    ErrorComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    // felveszem a RouterModule-t úgy, hogy átadom neki a router konfigurációkat 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
