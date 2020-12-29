import { Component } from '@angular/core';

import { version } from '../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  version = version;
  title = 'ng2-truncate-demo!!';
}
