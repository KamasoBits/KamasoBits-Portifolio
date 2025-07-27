import { Routes } from '@angular/router';
import path from 'node:path';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { PackagesComponent } from './Components/packages/packages.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { ContactComponent } from './Components/contact/contact.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'packages',component:PackagesComponent},
    {path:'projects',component:ProjectsComponent},
    {path:'contact',component:ContactComponent},
    {path:'**',component:PageNotFoundComponent}

];
