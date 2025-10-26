import { Component } from '@angular/core';
import { filter, Observable } from 'rxjs';

@Component({
  selector: 'app-observable-even',
  imports: [],
  templateUrl: './observable-even.component.html',
  styleUrl: './observable-even.component.css'
})
export class ObservableEvenComponent {

   evenNumbers: number[] = [];

  ngOnInit() {
    const numbers$ = new Observable<number>(observer => {
      for (let i = 1; i <= 10; i++) {
        observer.next(i);
      }
      observer.complete();
    });

    numbers$
      .pipe(filter(num => num % 2 === 0))
      .subscribe(num => this.evenNumbers.push(num));
  }

}
