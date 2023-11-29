import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import {HttpClient, HttpClientModule} from "@angular/common/http";


export interface CommentInterface {
  id: number,
  postId?: number,
  body?: string
}


@Component({
  selector: 'app-root',
  standalone: true,
    imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'E-commerce-project';
  constructor(private http: HttpClient) {
    this.http.get("http://localhost:3000/comments").subscribe( (response)  => {
      console.log(response);

    });

  }

}
