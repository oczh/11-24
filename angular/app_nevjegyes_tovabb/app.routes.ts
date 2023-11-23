import { Routes } from "@angular/router"; // behivatkozom a Routes objektumot 

// behivatkozom azokat a komponenseket, amelyek kötni akarom valamelyik útvonalhoz 
import { HomeComponent } from "./home/home.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserAddComponent } from "./user-add/user-add.component";
import { ErrorComponent } from "./error/error.component";
import { UserEditComponent } from "./user-edit/user-edit.component";

// felveszem egy Routes típusú konstansba/változóba az elérési utakat és ezeket exportálom
//  !!! Fontos a sorrend, mert a kiértékelés az első illeszkedő url-ig megy !!! 
export const appRoutes : Routes = [
    {path: 'home', component:HomeComponent}, // /home elérési útra helyezzük fel a HomeC-t
    {path: 'users', component:UserListComponent}, 
    {path: 'users/add', component:UserAddComponent},
    {path: 'users/edit/:id', component:UserEditComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'}, // ha / path-t kapunk, akkor átirányítjuk a kérést /home-ként 
    {path: '**', component:ErrorComponent} // ** -> minden url illeszkedik rá 
];