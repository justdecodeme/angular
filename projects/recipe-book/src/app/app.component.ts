import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  name = 'Rakko';
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    console.log(feature)
    this.loadedFeature = feature;
  }
}
