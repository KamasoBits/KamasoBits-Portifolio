import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-projects',
  imports: [
    FontAwesomeModule,
    MatIconModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
