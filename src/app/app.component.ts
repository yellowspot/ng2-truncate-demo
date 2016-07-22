import { Component } from '@angular/core';
import { TRUNCATE_PIPES } from 'ng2-truncate';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  pipes: [TRUNCATE_PIPES]
})
export class AppComponent {
  title = 'ng2-truncate-demo!';
}
