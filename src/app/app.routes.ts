import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home-components/home/home.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "home", component: CatalogueComponent }
];
