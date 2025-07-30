import { Component } from '@angular/core';
import { PackagesComponent } from "../packages/packages.component";
import { ProjectsComponent } from "../projects/projects.component";
import { FooterComponent } from "../footer/footer.component";


@Component({
  selector: 'app-home',
  imports: [
    PackagesComponent,
    ProjectsComponent,
    FooterComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
