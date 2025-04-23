import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 

@Component({
  selector: 'app-root',
  imports: [NgFor] ,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  users:any;
  http=inject(HttpClient);
  title = 'Dating App';
  ngOnInit(): void {
    this.http.get("https://localhost:7126/api/users").subscribe({
      next:responce=>this.users=responce,
      error:error=>console.log(error),
      complete:()=>console.log("Request completed")
    })
  }
}
