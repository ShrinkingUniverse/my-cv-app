import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Hello!';
  header = "Welcome to my CV page. I'm an enthusiastic software developer, started to learn angular no long ago. Here is my test app"
  pageContent1 = "After graduated I worked as an engineer designer of automation systems. During my career I realize that programming is much more interesting for me, and I start to study C# on my own."
  pageContent2 = "Also I got a tutor. Several years ago I changed my professional sphere and started to work as a developer."
  pageContent3 = "In my work I prefer continuous improvement of my skills and always interesting to study on my own by books and courses. I try my best to achieve the best result at my work."
  myCourses: string[] = [
    "Pluralsight, Object-oriented programming fundamentals in C#",
    "Udemy, The complete Guide to Angular-2"]
  constructor() { }

  ngOnInit(): void {
  }

}
