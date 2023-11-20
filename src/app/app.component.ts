import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";

// interface ICommnet
export interface CommentInterface {
  id: number,
  postId?: number,
  body?: string
}


@Component({
  selector: 'app-root',
  standalone: true,
    imports: [CommonModule, RouterOutlet, HeaderComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'E-commerce-project';
  constructor(private http: HttpClient) {
    this.http.get("http://localhost:3000/comments").subscribe( (response)  => {
      console.log(response);
      // response.forEach( (data) => {
      //   console.log(data.id);
      // });
      // console.log(res.length);
      // console.log(res[0].id);
    });
    // this.title = 'E-commerce-project';
    // console.log("app.component");
  }

}
