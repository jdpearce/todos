import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Message } from '@todos/api-interfaces';

// something different to make this affected

@Component({
  selector: 'todos-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}
}
