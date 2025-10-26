import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent {
  result: any;
  countryName = '';

  constructor(private http: HttpClient) {}

  searchCountry() {
    if (!this.countryName.trim()) return;

    this.http
      .get<any>('https://restcountries.com/v3.1/name/' + this.countryName)
      .subscribe({
        next: data => this.result = data,
        error: error => console.error('Error fetching country data:', error)
      });
  }
}
