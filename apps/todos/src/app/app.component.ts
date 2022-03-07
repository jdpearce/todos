import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@todos/api-interfaces';

@Component({
  selector: 'todos-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}
}
