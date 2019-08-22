import { Component } from '@angular/core';
import { DateService } from './__services__/date.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-jest-test';

  constructor(
    private dateService: DateService
  ) {

  }
}
