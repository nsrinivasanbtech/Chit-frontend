import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  titleToHeader: string;
  constructor() { }

  ngOnInit(): void {
    this.titleToHeader = 'Blogs';
  }

}
