import { Component } from '@angular/core';
import { ng2TruncatePipe } from 'ng2-truncate';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  pipes: [ng2TruncatePipe]
})
export class AppComponent {
  title = 'ng2-truncate-demo!';
}
