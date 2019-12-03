import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Rakko';
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    console.log(feature)
    this.loadedFeature = feature;
  }
}