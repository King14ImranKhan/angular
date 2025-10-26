import { Component } from '@angular/core';
import { filter, Observable } from 'rxjs';

@Component({
  selector: 'app-observable-odd',
  imports: [],
  templateUrl: './observable-odd.component.html',
  styleUrl: './observable-odd.component.css'
})
export class ObservableOddComponent {

   oddNumbers: number[] = [];

  ngOnInit() {
    const numbers$ = new Observable<number>(observer => {
      for (let i = 1; i <= 10; i++) {
        observer.next(i);
      }
      observer.complete();
    });

    numbers$
      .pipe(filter(num => num % 2 !== 0))
      .subscribe(num => this.oddNumbers.push(num));
  }

}
