import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {}

  ngOnInit(): void {
    console.log('%cAppComponent.init', 'background-color:purple;color:white;');
  }

}
