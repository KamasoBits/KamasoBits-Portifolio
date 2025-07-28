import { Component } from '@angular/core';
import { PackagesComponent } from "../packages/packages.component";
import { ProjectsComponent } from "../projects/projects.component";


@Component({
  selector: 'app-home',
  imports: [
    PackagesComponent,
    ProjectsComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
