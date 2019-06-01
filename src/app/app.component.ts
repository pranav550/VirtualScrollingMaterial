import { Example } from './example-table/example';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { delay, map, startWith } from 'rxjs/operators';
import { names } from '../app/name';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  delay = 2000;
  examples: Observable<Example[]>;
  pending: Observable<boolean>;
  sticky: boolean;

  constructor() {
    this.fetch();
  }

  fetch() {
    this.examples = of(
      
      names.map((name) => ( name ))
    ).pipe(
      delay(this.delay),
      startWith([])
    );
    this.pending = this.examples.pipe(
      
      map(data => data.length === 0)
    );
  
  }

  
}
