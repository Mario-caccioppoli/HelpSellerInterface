import { Component } from '@angular/core';
import { LogService } from './service/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelpSeller';
  constructor(private log : LogService)
  {

  }
}
