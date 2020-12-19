import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directive-attribute-app';
  public message: string = 'Sample Demostration of Attribute Directives using Custom Directives';  
  color: string = 'blue';
}
