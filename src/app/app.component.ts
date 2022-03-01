import { Component } from '@angular/core';

import * as packageJson from '../../package.json';

const { version } = packageJson;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  version = version;
  title = 'ng2-truncate-demo!!';
}
